const express=require("express");

const app = express();
const port = process.env.PORT || "8000";

app.use(express.static(__dirname+'/public'));

app.get("/hello", (req, res)=>{
    res.send("Hello World!");
})

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});