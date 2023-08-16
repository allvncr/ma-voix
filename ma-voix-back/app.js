const express = require("express");
const app = express();

// middleware
app.use(express.json());

const port = 3000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Le serveur écoute sur le port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
