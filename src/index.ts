import express from "express";

const app = express();

// route
app.route("/").get((req, res) => {
	res.json({ message: "This is Joko Susilo" });
});

app.listen(8000);