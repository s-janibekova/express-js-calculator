const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) => {
  // num1 is the name of the input
  var num1 = Number(req.body.num1)
  var num2 = Number(req.body.num2)
  var result = num1 + num2
  res.send("Thanks for posting "+ result)
})

// BMI index requests

app.get("/bmi-calcuator", (req, res) => {
  res.sendFile(__dirname + '/bmiCalculator.html')
})


app.post("/bmi-calcuator", (req,res) => {
  var height = parseFloat(req.body.height)
  var weight = parseFloat(req.body.weight)
  var bmi = weight / (height*height)

  res.send("Your bmi is " + bmi.toFixed(2))
})

app.listen(3000, (req, res) => {
  console.log("Server is running on port 3000")
})
