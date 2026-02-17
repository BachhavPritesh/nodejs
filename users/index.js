const express = require("express");
const app = express();
app.use(express.json());

const users = [
  {
    attendance: 80,
    name: "joy",
    uid: 123,
    youtube_sub: 14,
    bonus: "20"
  },
  {
    attendance: 90,
    name: "Roy",
    uid: 323,
    youtube_sub: 19,
    bonus: "26"
  }
];

app.get("/", (req, res) => {
  res.send("Express server is running");
});



app.get("/users/:uid", (req, res) => {
  const userUid = Number(req.params.uid);

  const user = users.find(u => u.uid === userUid);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});



app.post("/users", (req, res) => {
  const newUser = {
    attendance: req.body.attendance,
    name: req.body.name,
    uid: req.body.uid,
    youtube_sub: req.body.youtube_sub,
    bonus: req.body.bonus
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created successfully",
    user: newUser
  });
});



app.put("/users/:uid", (req, res) => {
  const userUid = Number(req.params.uid);

  const index = users.findIndex(u => u.uid === userUid);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[index] = {
    attendance: req.body.attendance,
    name: req.body.name,
    uid: userUid, 
    youtube_sub: req.body.youtube_sub,
    bonus: req.body.bonus
  };

  res.status(200).json({
    message: "User updated successfully",
    user: users[index]
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
