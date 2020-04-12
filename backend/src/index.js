const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const mongoose = require("mongoose");

const app = express();

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