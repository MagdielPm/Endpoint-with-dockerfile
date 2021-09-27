const express = require("express");

const app = express();

app.get("/", (req, res) =>
  res.send([
    { nombreAlumno: "Magdiel", numeroAlumno: "1" },
    { nombreAlumno: "Ezbai", numeroAlumno: "2" },
    { nombreAlumno: "Pedro", numeroAlumno: "3" },
    { nombreAlumno: "Manuel", numeroAlumno: "4" },
    { nombreAlumno: "Anastacia", numeroAlumno: "5" },
    { nombreAlumno: "Elizabet", numeroAlumno: "6" },
  ])
);

app.listen(3000, () => {
  console.log("Done!");
});
