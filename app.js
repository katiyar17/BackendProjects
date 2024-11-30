const express = require("express");
const app = express();

// Middleware applied only for "/random"
// app.use((req, res, next) => {
//     console.log("hi, I am 1st middleware");
//     next();
// });

// app.use("/random", (req, res, next) => {
//     console.log("hi, I am 2nd wala middleware");
//     next();
// });

app.use((req,res,next) => {
    req.time = new Date(Date.now()).toString();
    console.log(req.method, req.hostname, req.path, req.time);
    next();
})

// Route handlers
app.get("/", (req, res) => {
    res.send("hai I am root");
});

app.get("/random", (req, res) => {
    res.send("this is the random page");
});

// Start the server
app.listen(6080, () => {
    console.log("listening on 6080");
});

