const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

const app = express();

mongoose.connect('mongodb+srv://developer_omnistack:p1ssw0rd@cluster0-d2qp3.gcp.mongodb.net/omni10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.set('useCreateIndex', true);

app.use(express.json());
app.use(routes);


app.listen(3333, () => {
    console.log("Omni10 running on", 3333);
});