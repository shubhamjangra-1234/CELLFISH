const express = require("express");
const cors = require("cors");
const passport = require("passport");
const localStrategy = require("passport-local");
const bodyParser = require("body-parser");
const flash = require("connect-flash");
const api = require("./api.js");
const sell = require("./Sell");
const userModel = require("./DB");
const app = express();
app.use(express.json());
var expressSession = require("express-session");
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(flash());
//express-session
app.use(
  expressSession({
    reSave: false,
    saveUninitialized: false,
    secret: "secret",
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(sell.serializeUser());
passport.deserializeUser(sell.deserializeUser());
const router = express.Router();

// Middleware
app.use(cors());
app.use(express.json());
passport.use(new localStrategy(userModel.authenticate()));

// Routes
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

router.get("/services", (req, res) => {
  res.json(services);
});

app.use("/api", api);

app.post("/register", function (req, res) {
  console.log("Received registration data:");
  console.log("Username:", req.body.username);
  console.log("Model Name:", req.body.modelName);
  console.log("Box and Charger:", req.body.boxAndCharger);
  console.log("IMEI Number:", req.body.imeiNumber);
  console.log("Condition:", req.body.condition);
  console.log("Screen Cracks:", req.body.screenCracks);
  console.log("Body Cracks:", req.body.bodyCracks);
  console.log("Owner Name:", req.body.ownerName);
  console.log("Phone Number:", req.body.phoneNumber);
  console.log("Email:", req.body.email);
  console.log("Address:", req.body.address);
  console.log("Pincode:", req.body.pincode);
  console.log("Full request body:", req.body);

  const MobileData = new sell({
    username: req.body.username,
    modelName: req.body.modelName,
    boxAndCharger: req.body.boxAndCharger,
    imeiNumber: req.body.imeiNumber,
    condition: req.body.condition,
    screenCracks: req.body.screenCracks,
    bodyCracks: req.body.bodyCracks,
    ownerName: req.body.ownerName,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    address: req.body.address,
    pincode: req.body.pincode,
  });
  MobileData.save()
    .then(() => {
      console.log("MobileData saved successfully");
    })
    .catch((error) => {
      console.error("Error saving MobileData:", error);
    });
  sell
    .register(MobileData, req.body.password)
    .then(function (registeredUser) {
      passport.authenticate("local")(req, res, function () {
        res
          .status(200)
          .json({ message: "Registration successful", user: registeredUser });
      });
    })
    .catch(function (error) {
      res
        .status(500)
        .json({ message: "Registration failed", error: error.message });
    });
});

// Commented out alternative registration route

// app.post("/register", function (req, res) {
//   const sellData = new userModel({
//     email: req.body.email,
//     username: req.body.username,
//     password: req.body.password,
//   });

//   userModel.register(sellData, req.body.password).then(function () {
//     passport.authenticate("local")(req, res, function () {
//       res.redirect("/home");
//     });
//   });
// });

// Server initialization
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
