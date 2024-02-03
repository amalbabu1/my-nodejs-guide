import express from "express";

const app = express();
const SERVER_PORT = process.env.PORT || 3000;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("API is available !!");
});

const startServer = () => {
  try {
    app.listen(SERVER_PORT, () => {
      console.log(`Server started at the Port http://localhost:${SERVER_PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
