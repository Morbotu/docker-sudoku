const express = require("express");
const app = express();
const db = require("./persistence");
// const fs = require("fs");
const getRandomSudoku = require("./routes/getRandomSudoku")

app.use(require("body-parser").json());
app.use(express.static(__dirname + "/static"));

app.get("/random-sudoku", getRandomSudoku)
app.listen(3000, () => console.log("Listening on port 8080"));

// db.init()
//     .then(() => {
//         app.listen(3000, () => console.log("Listening on port 8080"));
//     })
    // .then(async () => {
    //     if (!(await db.dataExists())) {
    //         console.log("Adding data...")
            // fs.readFile("./src/persistence/createSudokus/sudoku.csv", "utf-8", async (err, data) => {
            //         if (err) throw err;
            //         console.log("Downloading data...");
            //         let count = 0;
            //         let lines = data.split("\n");
            //         lines.shift();
            //         for (let line of lines) {
            //             await db.addSudoku(line)
            //                 .catch((err) => {
            //                     console.error(err);
            //                     process.exit(1);
            //                 });
            //             count++;
            //             if (count % Math.floor(lines.length/100) === 0) {
            //                 console.log(Math.round(count/lines.length*100) + "%");
            //             }
            //         }
            //         console.log("Done loading")
            // })
    //     }
    //     else console.log("Data already exists")
    // })
//     .catch((err) => {
//         console.error(err);
//         process.exit(1);
//     });

// const gracefulShutdown = () => {
//     db.teardown()
//         .catch(() => {})
//         .then(console.log("Closing server..."))
//         .then(() => process.exit());
// };

// process.on("SIGINT", gracefulShutdown);
// process.on("SIGTERM", gracefulShutdown);
// process.on("SIGUSR2", gracefulShutdown); // Sent by nodemon
