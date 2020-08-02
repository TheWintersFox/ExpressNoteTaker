const express = require("express");
const apiRoute = require("./Routes/apiRoute.js")
const htmlRoute = require("./Routes/htmlRoute.js")
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static('public'));

app.use(apiRoute);
app.use(htmlRoute);


app.listen(PORT, function() {
    console.log("APP listening on PORT " + PORT);
});