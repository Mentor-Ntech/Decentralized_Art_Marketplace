const express = require('express')
const dotenv = require('dotenv')
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const userRoutes = require("./routes/userRoutes");
const artworkRoutes = require("./routes/artworkRoutes");



dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use('/auth', userRoutes);
app.use('/artwork', artworkRoutes);


mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		app.listen(PORT, () => console.log(`Server Is 🏃‍♂️ On PORT ${PORT}`));
	})
	.catch((err) => console.log(err));

