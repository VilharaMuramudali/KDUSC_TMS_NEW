const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee');
const EmployeeModel1 = require('./models/Employee1');
const EmployeeModel2 = require('./models/Employee2');
const AdminModel = require('./models/Admin');
const FormModel = require('./models/Form');
const FormModel1 = require('./models/Form1');
const FormModel2 = require('./models/Form2');



const app = express()
app.use(express.json())
app.use(cors())

//mongoose.connect("mongodb+srv://admin:Miyuru4302@miyuruapi.imhpf7h.mongodb.net/VMS?retryWrites=true&w=majority");
mongoose.set("strictQuery",false) 

mongoose.connect('mongodb+srv://admin:Miyuru4302@miyuruapi.imhpf7h.mongodb.net/VMS?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to MongoDB');
    // Start your server or perform other operations after successful connection
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
    // Handle the error gracefully (e.g., show a meaningful error message to users)
  });

require('./models/Form');


app.post("/login",(req, res) => {
    const {email ,password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user=>{
        if(user){
            if(user.password === password){
                res.json("success")
            }else{
                res.json("wrong password")
            }
        }else{
            res.json("wrong email")
        }
    })
})


app.post("/login1",(req, res) => {
  const {email ,password} = req.body;
  EmployeeModel1.findOne({email: email})
  .then(user=>{
      if(user){
          if(user.password === password){
              res.json("success")
          }else{
              res.json("wrong password")
          }
      }else{
          res.json("wrong email")
      }
  })
})

app.post("/login2",(req, res) => {
  const {email ,password} = req.body;
  EmployeeModel2.findOne({email: email})
  .then(user=>{
      if(user){
          if(user.password === password){
              res.json("success")
          }else{
              res.json("wrong password")
          }
      }else{
          res.json("wrong email")
      }
  })
})

////////////////////////////////////

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})


app.post('/Alogin',(req, res) => {
    const {email ,password} = req.body;
    AdminModel.findOne({email: email})
    .then(user=>{
        if(user){
            if(user.password === password){
                res.json("success")
            }else{
                res.json("wrong password")
            }
        }else{
            res.json("wrong email")
        }
    })
})

app.post('/Alogin', (req, res) => {
    AdminModel.create(req.body)
    .then(admin => res.json(admin))
    .catch(err => res.json(err))
})


/////////////////////////////////////

app.post('/home', (req, res) => {
    FormModel.create(req.body)
    .then(formd => res.json(formd))
    .catch(err => res.json(err))
})

app.post('/home1', (req, res) => {
  FormModel1.create(req.body)
  .then(formd => res.json(formd))
  .catch(err => res.json(err))
})

app.post('/home2', (req, res) => {
  FormModel2.create(req.body)
  .then(formd => res.json(formd))
  .catch(err => res.json(err))
})

////////////////////////////////////////////////



app.get("/getAllForm", async (req, res) => {
    try {
      const FormData = await FormModel.find({});
      res.send({ status: "ok", data: FormData });
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: "error", message: "Internal server error" });
    }
  });
  
  app.get("/getAllForm1", async (req, res) => {
    try {
      const FormData = await FormModel1.find({});
      res.send({ status: "ok", data: FormData });
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: "error", message: "Internal server error" });
    }
  });

  app.get("/getAllForm2", async (req, res) => {
    try {
      const FormData = await FormModel2.find({});
      res.send({ status: "ok", data: FormData });
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: "error", message: "Internal server error" });
    }
  });

////////////////////////////////////////////////


  app.post('/updateFormData', (req, res) => {
    const { id, rejectOrConfirm } = req.body;
  
    FormModel.findOneAndUpdate(
      { _id: id }, // Match the document by ID
      { $set: { rejectOrConfirm: rejectOrConfirm } }, // Update the rejectOrConfirm field
      { new: true } // Return the updated document
    )
      .then(updatedForm => {
        if (updatedForm) {
          res.json(updatedForm);
        } else {
          res.status(404).json({ message: 'Form not found' });
        }
      })
      .catch(err => {
        console.error('Error updating form data:', err);
        res.status(500).json({ message: 'Internal server error' });
      });
  });
  

  // Update route
  app.post('/updateFormDatas', (req, res) => {
    const { id, updatedData } = req.body;
    
  
    FormModel.findOneAndUpdate(
      { _id: id }, // Match the document by ID
      { $set: updatedData }, // Update all fields using updatedData
      { new: true } // Return the updated document
    )
      .then(updatedForm => {
        if (updatedForm) {
          res.json(updatedForm);
        } else {
          res.status(404).json({ message: 'Form not found' });
        }
      })
      .catch(err => {
        console.error('Error updating form data:', err);
        res.status(500).json({ message: 'Internal server error' });
      });
  });


  app.post('/deleteFormData', (req, res) => {
    const { id } = req.body;
  
    FormModel.findOneAndDelete({ _id: id })
      .then(deletedForm => {
        if (deletedForm) {
          res.json({ message: 'Form data deleted', deletedForm });
        } else {
          res.status(404).json({ message: 'Form not found' });
        }
      })
      .catch(err => {
        console.error('Error deleting form data:', err);
        res.status(500).json({ message: 'Internal server error' });
      });
  });


  /////////////////////////////////////////////



  app.post('/updateFormData1', (req, res) => {
    const { id, rejectOrConfirm } = req.body;
  
    FormModel1.findOneAndUpdate(
      { _id: id }, // Match the document by ID
      { $set: { rejectOrConfirm: rejectOrConfirm } }, // Update the rejectOrConfirm field
      { new: true } // Return the updated document
    )
      .then(updatedForm => {
        if (updatedForm) {
          res.json(updatedForm);
        } else {
          res.status(404).json({ message: 'Form not found' });
        }
      })
      .catch(err => {
        console.error('Error updating form data:', err);
        res.status(500).json({ message: 'Internal server error' });
      });
  });
  

  // Update route
  app.post('/updateFormDatas1', (req, res) => {
    const { id, updatedData } = req.body;
    
  
    FormModel1.findOneAndUpdate(
      { _id: id }, // Match the document by ID
      { $set: updatedData }, // Update all fields using updatedData
      { new: true } // Return the updated document
    )
      .then(updatedForm => {
        if (updatedForm) {
          res.json(updatedForm);
        } else {
          res.status(404).json({ message: 'Form not found' });
        }
      })
      .catch(err => {
        console.error('Error updating form data:', err);
        res.status(500).json({ message: 'Internal server error' });
      });
  });


  app.post('/deleteFormData1', (req, res) => {
    const { id } = req.body;
  
    FormModel1.findOneAndDelete({ _id: id })
      .then(deletedForm => {
        if (deletedForm) {
          res.json({ message: 'Form data deleted', deletedForm });
        } else {
          res.status(404).json({ message: 'Form not found' });
        }
      })
      .catch(err => {
        console.error('Error deleting form data:', err);
        res.status(500).json({ message: 'Internal server error' });
      });
  });

/////////////////////////////////////////////


app.post('/updateFormData2', (req, res) => {
  const { id, rejectOrConfirm } = req.body;

  FormModel2.findOneAndUpdate(
    { _id: id }, // Match the document by ID
    { $set: { rejectOrConfirm: rejectOrConfirm } }, // Update the rejectOrConfirm field
    { new: true } // Return the updated document
  )
    .then(updatedForm => {
      if (updatedForm) {
        res.json(updatedForm);
      } else {
        res.status(404).json({ message: 'Form not found' });
      }
    })
    .catch(err => {
      console.error('Error updating form data:', err);
      res.status(500).json({ message: 'Internal server error' });
    });
});


// Update route
app.post('/updateFormDatas2', (req, res) => {
  const { id, updatedData } = req.body;
  

  FormModel2.findOneAndUpdate(
    { _id: id }, // Match the document by ID
    { $set: updatedData }, // Update all fields using updatedData
    { new: true } // Return the updated document
  )
    .then(updatedForm => {
      if (updatedForm) {
        res.json(updatedForm);
      } else {
        res.status(404).json({ message: 'Form not found' });
      }
    })
    .catch(err => {
      console.error('Error updating form data:', err);
      res.status(500).json({ message: 'Internal server error' });
    });
});


app.post('/deleteFormData2', (req, res) => {
  const { id } = req.body;

  FormModel2.findOneAndDelete({ _id: id })
    .then(deletedForm => {
      if (deletedForm) {
        res.json({ message: 'Form data deleted', deletedForm });
      } else {
        res.status(404).json({ message: 'Form not found' });
      }
    })
    .catch(err => {
      console.error('Error deleting form data:', err);
      res.status(500).json({ message: 'Internal server error' });
    });
});


app.listen(3001,()=>{
    console.log("Server is running")
});





