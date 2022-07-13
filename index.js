const express = require("express")
const format = require("date-format")
const axios = require("axios")
const bodyparser = require("body-parser")

const port = 2000


const app = express()


//get api 
app.get("/sachin",(req,res) => {
    res.status(200).send("sachin")
})

app.post("/posting",(req,res) => {
    const data = {
        "fname" : "sachin",
        "lname" : "singh"
    }
    res.status(200).send(data)
})

//post

app.post("/posting/:fname/:lname",(req,res) => {
    const data = {
        "fname" : req.params.fname,
        "lname" : req.params.lname
    }
    res.status(200).send(data)
})


//posting through passing in body
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json());
app.post("/posting/body",(req,res) => {
    const data = {
        "fname" : req.body.fname,
        "lname" : req.body.lname
    }
    res.status(200).json(data)
})

//data retriving 
app.get("/alldata",(req,res) => {
    axios.get("https://gorest.co.in/public/v1/posts")
          .then(data => {
              res.status(200).send(data.data)
          })
          .catch(err => {
              res.status(400).send("Bad Request")
          })
})

app.listen(port,() => {
    console.log(`server is running at ${port}`)
})
 
