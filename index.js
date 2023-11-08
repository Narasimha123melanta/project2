const express=require('express');

const app = express();
const PORT=5000;

const Student = require("./models/studentMODEL");
app.use(express.json());
require('./db.js')

app.get("/",(req,res) => {
  res.send("Hello World!...");
});

app.get("/students",(req,res) => {
    res.send("Hello from students");
  });

  app.get("/faculty",(req,res) => {
    res.send("Hello from faculty");
  });

  app.post('/student', async (req,res) => {
    try{
    const data = req.body;
    const createdStudent = new Student(data);
    await createdStudent.save();
    
    res.send("Student created");
    }catch (error){
    console.log(error);
    }
  });

  app.get("/student", async (req, res) => {
    try {
    
      const StudentList = await Student.find();
      res.send(StudentList);
    } catch (error) {

      console.log(error);
    }
  });
  app.delete("/student/:id", async (req, res) => {
    try {
    
      const StudentId = req.params.id;
      await Student.deleteOne({id:req.params.id});
      res.send("Student deleted");
    } catch (error) {
      
      console.log(error);
    }
  });
  app.put("/student/:id", async (req, res) => {
    try {
    
      const StudentId = req.params.id;
      await Student.updateOne({id:StudentId},{$set:req.body});
      res.send("Student updated");
    } catch (error) {
      
      console.log(error);
    }
  });
  
// create a resource
// app.post()

app.listen(PORT , function () {
    console.log(`Server is running on localhost:${PORT}`);
});
