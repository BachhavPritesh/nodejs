const express = require("express");
const app = express();

const students = [
  {
    studentName: "ABDUL HAQUE",
    University: "SUxCG 714",
    UniversityUID: "108444"
  },
  {
    studentName: "ADITYA KUMAR",
    University: "SUxCG 702",
    UniversityUID: "108716",
  },
  {
    studentName: "AMAN KUMAR",
    University: "SUxCG 702",
    UniversityUID: "108500"
  },
  {
    studentName: "AMRIT RAJ",
    University: "SUxCG 702",
    UniversityUID: "108587"
  }
];


app.get("/students/name/university/:id", (req, res) => {
  const university = req.params.id;

  const uni = students.find(
    u => u.University.toLowerCase() === university.toLowerCase()
  );

  if (!uni) {
    return res.status(404).json({ message: "University not found" });
  }

  res.status(200).json(uni);
});


app.get("/students/name/:user", (req, res) => {
  const user = req.params.user;

  const stud = students.find(
    u => u.studentName.toLowerCase() === user.toLowerCase()
  );

  if (!stud) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(stud);
});


app.get("/students/:id", (req, res) => {
  const studentId = req.params.id;

  const stud = students.find(
    u => u.UniversityUID === studentId
  );

  if (!stud) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(stud);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
