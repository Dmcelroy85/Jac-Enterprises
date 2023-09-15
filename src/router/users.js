const express = require("express");
const router = express.Router();

let users = [
  {
    first_name: "Tony",
    last_name: "Zamboni",
  },
  {
    first_name: "Wayne",
    last_name: "Gretzky",
  },
  {
    first_name: "Tiger",
    last_name: "Woods",
  },
];

router.get("/", (req, res) => {
  res.status(200).json(users);
});

// router.get('/', (req, res) => {
//     res.status(200).json([
//        {
//             "first_name":"Mark",
//             "last_name": "Morton"
//         },
//         {
//             "first_name":"Saul",
//             "last_name": "Hudson"
//         },
//         {
//             "first_name":"Edward",
//             "last_name": "Van Halen"
//         },
//         {
//             "first_name":"Darrel",
//             "last_name": "Abbot"
//         }
//     ])
// })

router.use((req, res, next) => {
  console.log("some text i can see")
  next ()
})

router.get("/:id", (req, res) => {
  console.log(req.params);
  if (users[req.params.id]) {
    return res.status(200).json(users[req.params.id]);
  }
  return res.status(404).json({
    error: "User not Found!",
  });



  // console.log("Getting user Id: "+req.params)
  // res.status(200).json({
  //     "message": "User Found!"
});

router.post("/new", (req, res) => {
  console.log(req.body);
  let user = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  };
  users.push(user);
  res.status(201).json({
    message: "User Created!",
  });
});

module.exports = router;
