const express = require('express');
const router = express.Router();
const { createPost, deletePost } = require('../controllers/PostControllers');
const { auth, isStudent, isInstructor, isAdmin } = require('../middlewares/auth');

router.post('/post/createPost', auth, isInstructor, createPost);
router.delete('/post/deletePost/:id', auth, isInstructor, deletePost);

module.exports = router;