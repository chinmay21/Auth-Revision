const express = require('express');
const router = express.Router();
const { createPost, deletePost, fetchAllPosts } = require('../controllers/PostControllers');
const { auth, isStudent, isInstructor, isAdmin } = require('../middlewares/auth');

router.post('/posts', auth, isInstructor, createPost);
router.delete('/posts/:id', auth, isInstructor, deletePost);
router.get('/posts/getAllPosts', auth, fetchAllPosts);

module.exports = router;