const express = require("express");
const app = express();
const getRandomSudoku = require("./routes/getRandomSudoku")

app.use(require("body-parser").json());
app.use(express.static(__dirname + "/static"));

app.get("/random-sudoku", getRandomSudoku)
app.listen(3000, () => console.log("Listening on port 8080"));