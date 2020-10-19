const fs = require("fs");

function getRandomSudoku() {
    return new Promise((acc, rej) => {
        fs.readFile("./src/persistence/createSudokus/sudoku.csv", "utf-8", (err, data) => {
            if (err) throw rej(err);
            let lines = data.split("\n");
            lines.shift();
            let id = Math.floor(Math.random() * lines.length);
            let line = lines[id];
            acc({
                "id": id,
                "quizzes": line.split(",")[0],
                "solutions": line.split(",")[1]
            });
        });
    });
}

module.exports = {
    getRandomSudoku
};