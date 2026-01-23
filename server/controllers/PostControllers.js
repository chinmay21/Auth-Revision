const Post = require('../models/Post');
const Comment = require('../models/Comment');
const User = require('../models/User');

exports.createPost = async (req, res) => {
    try{
        const {title, content} = req.body;
        if(!title || !content) {
            return res.status(401).json({
                success:false,
                message:"Details required for creating post is missing"
            });
        }
        const user = req.user.id;
        if(!user) {
            return res.status(401).json({
                success:false,
                message:"Error occured while validating user"
            });
        }

        const post = await Post.create({title, content, user});
        await User.findByIdAndUpdate(user, { $push: { posts: post._id } }, { new: true });

        return res.status(200).json({
            success:true,
            message:"Post created Successfully",
            post
        })
    }
    catch(error) {
        return res.status(500).json({
            success:false,
            message:"Error occured while creating post, Please try again later."
        });
    }
}

exports.deletePost = async (req, res) => {
    try{
        const post = req.params.id;
        const deletedPost = await Post.findById(post);

        if(!deletedPost) {
            return res.status(404).json({
                success:false,
                message:"Post not found"
            });
        }

        const user = req.user.id;

        if(deletedPost.user.toString() !== user) {
            return res.status(401).json({
                success:false,
                message:"Unauthorized user"
            });
        }

        await Comment.deleteMany({post: post});

        await User.findByIdAndUpdate(user, { $pull: { posts: post._id } }, { new: true });

        await Post.findByIdAndDelete(post);


        return res.status(200).json({
            success:true,
            message:"Post deleted successfully"
        });

    }
    catch(error) {
        return res.status(500).json({
            success:false,
            message:"Error occured while deleting post, Please try again later."
        })
    }
}

exports.fetchAllPosts = async (req, res) => {
    try{
        const posts = await Post.find({})
                            .populate("user", "name email")
                            .populate("comments")
                            .exec();
        if(posts.length === 0) {
            return res.status(404).json({
                success:false,
                message:"No posts found"
            });
        }

        return res.status(200).json({
            success:true,
            message:"Posts fetched successfully",
            posts
        });
    }
    catch(error) {
        console.log("Error fetching posts:", error);
        return res.status(500).json({
            success:false,
            message:"Error while fetching the posts"
        });
    }
}