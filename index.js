const express = require("express");
const app = express();
const path = require("path")
const usersRouters = require("./routers/users")
const SERVER_PORT =process.env.PORT || 8080;

//call this function after the http server starts listening
function onHttpStart() {
    console.log("Express http server listening on; " + SERVER_PORT)
}
app.get("/", (req, res) => {
  res.send("hello world");
});
app.use(express.static("./views"))
app.use(express.static("./views/html"))
app.use(usersRouters)

app.listen(SERVER_PORT,onHttpStart);

//8080/users/faculty
//8080/users/fulltimefaculty
//8080/users/fulltime/student