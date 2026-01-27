const { raw } = require('express');
const Comment = require('../models/Comment');
const Post = require('../models/Post');

exports.createComment = async(req, res) => {
    try{
        const {content} = req.body;
        if(!content) {
            return res.status(401).json({
                success:false,
                message:"Comment body can't be empty"
            });
        }
        const user = req.user.id;
        const postId = req.params.id;
        
        const newComment = await Comment.create({content, user, post:postId});

        const populatedComment = await newComment.populate("user", "name");

        await Post.findByIdAndUpdate(postId, { $push: { comments: newComment._id } }, { new: true });

        return res.status(200).json({
            success:true,
            message:"Comment created successfully",
            comment:populatedComment
        });
    }
    catch(error) {
        return res.status(500).json({
            success:false,
            message:"Error while creating comment"
        })
    }
}

exports.deleteComment = async(req, res) => {
    try{
        const commentId = req.params.id;
        if(!commentId) {
            return res.status(401).json({
                success:false,
                message:"Error while fetching comment's ID"
            });
        }

        const comment = await Comment.findById(commentId);
        if(!comment) {
            return res.status(400).json({
                success:false,
                message:"Can't find the comment to be deleted"
            });
        }

        if(comment.user.toString() !== req.user.id) {
            return res.status(403).json({
                success:false,
                message:"You are not authorized to delete this comment"
            });
        }

        await Comment.deleteOne({_id: commentId});

        const updatedPost = await Post.findByIdAndUpdate(comment.post, { $pull: { comments: comment._id } }, { new: true });


        return res.status(200).json({
            success:true,
            message:"Comment deleted successfully",
            updatedPost:updatedPost,
            postId: comment.post,
        });
    }
    catch(error) {
        return res.status(500).json({
            success:false,
            message:"Error occured while deleting comment"
        });
    }
}