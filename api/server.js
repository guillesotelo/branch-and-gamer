const express = require("express");
const morgan = require("morgan");

const db = require("./db");
const routes = require("./routes");
const app = express();

// LOGGUER
app.use(morgan("dev"));

// PARSERS
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.use("/api", routes);

// RUTA PRUEBA
app.use("/", (req, res, nex) => {
  res.send("ESTAS EN '/'");
});

app.use("/", (err, req, res, next) => {
  console.log(err);
  console.error("ERROR", err.stack);
  res.status(500).json(err);
});

const PORT = 3001;
const url = "http://localhost:";

db.sync({ force: true })
  .then(() => {
    console.log(`Coneeccion a base de datos completa`);
    app.listen(PORT, () => {
      console.log(`estamos conectados y escuchando en ${url + PORT}`);
    });
  })
  .catch((err) => console.log(err));
