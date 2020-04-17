const http = require("http");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const { setupWebSocket } = require("./websocket");
const routes = require("./routes");

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('[mongodb-atlas-svr-url]', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.set('useCreateIndex', true);

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333, () => {
    console.log("Omni10 running on", 3333);
});