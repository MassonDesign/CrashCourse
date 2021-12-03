//const Sequelize = require("sequelize");
const Sequelize = require("sequelize");

module.exports = new Sequelize("codegig", "postgres", "rooki2003", {
	host: "localhost",
	dialect: "postgres",
});
