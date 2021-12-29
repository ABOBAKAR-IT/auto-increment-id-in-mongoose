const express = require("express");
const mongoose=require('mongoose')
const User = require("./model");
const app = express();
const port = 1400;
app.use(express.json());
app.listen(port, () => {
  console.log(`server work on port no ${port}`);
});

const db =
  "mongodb+srv://abobakar786:rana786@cluster0.ojybe.mongodb.net/school?retryWrites=true&w=majority";
     
             mongoose.connect(db).then(()=>{  console.log('database connected successfully');})

app.post("/add", async(req, res) => {
  const adduser = new User({
    name: req.body.name,
    email: req.body.email,
  });
  let data=await adduser
    .save()
});
app.get("/find",async(req, res) => {
 let data=await  User.find()
   res.send(data)
});
 


