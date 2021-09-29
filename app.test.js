import supertest from "supertest";
import server from "./src/app";

describe("GET /alumnos", () => {
  it("Should not be null", async () => {
    const response = await supertest(server).get("/alumnos");
    expect(response.body).not.toBeNull();
  });
});

describe("GET /alumnos", () => {
  it("The response length should be six", async () => {
    const response = await supertest(server).get("/alumnos");
    expect(response.body.length).toBe(6);
  });
});

describe("GET /alumnos", () => {
  it("The response body should be equal to the example", async () => {
    const response = await supertest(server).get("/alumnos");
    expect(response.body).toEqual([
      { student: "Magdiel", studentId: "1" },
      { student: "Ezbai", studentId: "2" },
      { student: "Pedro", studentId: "3" },
      { student: "Manuel", studentId: "4" },
      { student: "Anastacia", studentId: "5" },
      { student: "Elizabet", studentId: "6" },
    ]);
  });
});
