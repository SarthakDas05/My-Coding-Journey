import express from "express"
const app = express()
const port = 3000
import mongoose from "mongoose"
import { Employee } from "./models/Employee.js"

app.use(express.json())
app.use(express.static("public"))

app.post("/generate", async (req, res) => {
  await Employee.deleteMany({})
  const isManager = [
    true,
    false
  ]
  const cities = [
    "New York",
    "Mumbai",
    "Delhi",
    "London",
    "Bangalore",
    "Tokyo",
    "Sydney"
  ]
  const languages = [
    "Python",
    "JavaScript",
    "Java",
    "C++",
    "Go",
    "Ruby",
    "TypeScript"
  ]
  const names = [
    "Harry",
    "Ram",
    "Shyam",
    "Aisha",
    "Neha",
    "Rohan",
    "Mohan",
    "Anika",
    "John",
    "David"
  ]
  let employees = []
  for (let index = 0; index < 10; index++) {
      let obj ={ name: names[Math.floor(Math.random() * names.length)], salary: Math.floor(Math.random()*100000), language: languages[Math.floor(Math.random() * languages.length)], isManager: isManager[Math.floor(Math.random()*isManager.length)] }
      employees.push(obj)
  }
  const gen = await Employee.insertMany(employees);
  res.send('Dummy Data Created')
})

app.post("/delete", async (req, res) => {
  await Employee.deleteMany({});
  res.send('Data Deleted')
})

let conn = await mongoose.connect("mongodb://localhost:27017/Company")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})