import express, { Request, Response } from "express";
const app = express();

// Parse JSON
app.use(express.json());

app.get("/api/", (req: Request, res: Response) => {
  res.send("hello world");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
