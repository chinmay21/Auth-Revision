const express = require('express');
const cors = require("cors");
const dbConnect = require('./config/database');
require('dotenv').config();
const userRoutes = require('./routes/User');
const postRoutes = require('./routes/Post');
const commentRoutes = require('./routes/Comment');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/v1/auth', userRoutes);
app.use('/api/v1', postRoutes);
app.use('/api/v1', commentRoutes);

dbConnect();

app.get('/', (req, res) => {
    return res.json({
        success:true,
        message:"Server started successfully"
    })
});

app.listen(PORT, () => {
    console.log(`App is running at PORT ${PORT}`)
});
