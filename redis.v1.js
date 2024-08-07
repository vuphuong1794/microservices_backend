const express = require("express");
const app = express();

app.get("/order", (req, res)=>{
    const time = new Date().getTime()
    console.log(`Time request:: ${time}`)
    return res.json({
        status: "success",
        msg: "ok",
        time
    })
})
app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})