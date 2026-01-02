const express = require('express');
const dbConnect = require('./config/database');
require('dotenv').config();
const userRoutes = require('./routers/User');
const postRoutes = require('./routers/Post');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/v1', userRoutes);
app.use('/api/v1', postRoutes);

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
