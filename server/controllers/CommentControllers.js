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
        
        const existingPost = await Post.findById(postId);
        if(!existingPost) {
            return res.status(404).json({
                success:false,
                message:"Post not found"
            });
        }
        
        await Comment.create({content, user, postId});

        return res.status(200).json({
            success:true,
            message:"Comment created successfully"
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

        await Comment.deleteOne({_id: commentId, user: req.user.id});

        return res.status(200).json({
            success:true,
            message:"Comment deleted successfully"
        });
    }
    catch(error) {
        return res.status(500).json({
            success:false,
            message:"Error occured while deleting comment"
        });
    }
}