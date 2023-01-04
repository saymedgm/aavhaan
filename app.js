const express = require("express");
const app = express();
const path = require("path");
const { connectMongoose } = require("./database/connection");
const Sport = require("./database/schema/sports");

app.use(express.json())
connectMongoose();

// const Badminton = mongoose.model("Badminton", sportsSchema);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});

app.get("/sports/:id", async (req, res) => {
  const { id } = req.params;
  const findSports = await Sports.findById(id);
  res.send(findSports._id);
});

app.get("/register", async (req, res) => {
  const collegeName = req.query.collegepicker;
//   const { capname, email, mobileno } = req.body;
//   console.log(capname);
//   console.log(email);
//   console.log(mobileno);
  console.log(collegeName);
});


app.listen(3000, () => {
    console.log('Server started');
})


// createPlayer();
//     async function createPlayer() {
//         try{
//             const playerReg = await Player.create({
//                 name: "Divanshu",
//                 email: "div@gmail.com",
//                 phone: "123456789",
                
//               })
//               console.log(playerReg);
//         } catch(e){
//       console.log(e.message);
//     }
// }
//   console.log("Server started");
// });
