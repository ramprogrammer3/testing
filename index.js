const express = require('express')
const app = express()
const port = 8080


app.get("/users",(req,res)=>{
    res.status(200).json({name : "ramkumar"})
})

app.post("/signin",(req,res)=>{
    res.redirect("/users")
})
app.listen(port,()=>{
    console.log(`server is runnin on port ${port}`)
})

module.exports = {
    app
}
