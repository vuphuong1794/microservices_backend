require('dotenv').config();
const app = require('./app');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
.then(() => {console.log('Connected to MongoDB')})
.catch((err) => {console.log(err)});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});