"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var app = (0, _express["default"])();
app.get("/alumnos", function (req, res) {
  return res.send([{
    student: "Magdiel",
    studentId: "1"
  }, {
    student: "Ezbai",
    studentId: "2"
  }, {
    student: "Pedro",
    studentId: "3"
  }, {
    student: "Manuel",
    studentId: "4"
  }, {
    student: "Anastacia",
    studentId: "5"
  }, {
    student: "Elizabet",
    studentId: "6"
  }]);
});
var _default = app;
exports["default"] = _default;