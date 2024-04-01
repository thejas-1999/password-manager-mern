import { Router } from "express";
import { Password } from "../models/password.model.js";

const route = Router();

//get one password
route.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const pass = await Password.findById(id);
    res.status(201).json(pass);
  } catch (error) {
    res.send(500).json({ message: error.message });
  }
});

//get all passwords
route.get("/", async (req, res) => {
  try {
    const pass = await Password.find({});
    res.status(201).json(pass);
  } catch (error) {
    res.send(500).json({ message: error.message });
  }
});

//add password
route.post("/", async (req, res) => {
  try {
    const pass = await Password.create(req.body);
    res.status(201).json(pass);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update password
route.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const pass = await Password.findByIdAndUpdate(id, req.body);
    if (!pass) {
      return res.status(404).json({ message: `password site not found` });
    }
    res.status(201).json(pass);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//delete password
route.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const pass = await Password.findByIdAndDelete(id, req.body);
    if (!pass) {
      return res.status(404).json({ message: `password site not found` });
    }
    res.status(201).json(pass);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export { route };
