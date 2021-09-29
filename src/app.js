import express from "express";

const app = express();

app.get("/alumnos", (req, res) =>
  res.send([
    { student: "Magdiel", studentId: "1" },
    { student: "Ezbai", studentId: "2" },
    { student: "Pedro", studentId: "3" },
    { student: "Manuel", studentId: "4" },
    { student: "Anastacia", studentId: "5" },
    { student: "Elizabet", studentId: "6" },
  ])
);

export default app;
