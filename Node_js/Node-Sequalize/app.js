const express = require("express");
const { engine } = require("express-handlebars");

const bodyParser = require("body-parser");
const path = require("path");

// Database
db = require("./config/database");

// test db
db.authenticate()
	.then(() => console.log("Database connected..."))
	.catch((err) => console.log("Error" + err));

const app = express();

// Midllewar for handlebars
app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//app.set("views", "./views");

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

//Index route
app.get("/", (req, res) => res.render("index", { layout: "landing" }));

// Gig routes
app.use("/gigs", require("./routes/gigs"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
