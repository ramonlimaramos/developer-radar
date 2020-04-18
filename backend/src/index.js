require('dotenv').config({
    path: process.env.NODE_ENV == "test" ? ".env.test" : ".env"
});

const http = require("http");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const { setupWebSocket } = require("./websocket");
const routes = require("./routes");

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect(process.env.MONGODB_ATLAS_SVR_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.set('useCreateIndex', true);

app.use(cors());
app.use(express.json());
app.use(routes);


server.listen(process.env.PORT, () => {
    console.log("DeveloperRadar running on", process.env.PORT);
});