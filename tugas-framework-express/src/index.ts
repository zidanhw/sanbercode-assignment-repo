import express, { Request, Response } from "express";
import path from "path";

const PORT = 3000;

function init() {
  const app = express();

  app.use(express.static(path.join(__dirname, "public")));

  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "OK",
      data: null,
    });
  });

  app.get("/hello", (req,res) => {
    res.status(200).json({
      message: "Success fetch message",
      data: "Hello World!"
    });
  });

  app.get("/user", (req,res) => {
    res.status(200).json({
      message: "Success fetch user",
      data: {
        id: 1,
        name: "Budi",
        username: "budidu",
        email: "budidu@mail.com"
      }
  });
});

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

init();
