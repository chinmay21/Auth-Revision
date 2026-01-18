const express = require('express');
const router = express.Router();
const { createComment, deleteComment } = require('../controllers/CommentControllers');
const { auth, isStudent } = require('../middlewares/auth');

router.post('/post/:id/comment', auth, isStudent, createComment);
router.delete('/comment/:id', auth, isStudent, deleteComment);

module.exports = router;