const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Post = require("../models/Post");

/*const allowedOrigins = ["http://localhost"];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Origin not allowed"));
    }
  },
};*/

router.use(cors());
router.use(bodyParser.json());

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const post = new Post({
    nomeAtleta: req.body.nomeAtleta,
    cognomeAtleta: req.body.cognomeAtleta,
    nascitaAtleta: req.body.nascitaAtleta,
    luogoNascitaAtleta: req.body.luogoNascitaAtleta,
    provNascitaAtleta: req.body.provNascitaAtleta,
    sessoAtleta: req.body.sessoAtleta,
    indirizzoAtleta: req.body.indirizzoAtleta,
    civicoAtleta: req.body.civicoAtleta,
    capAtleta: req.body.capAtleta,
    comuneAtleta: req.body.comuneAtleta,
    provAtleta: req.body.provAtleta,
    codfiscAtleta: req.body.codfiscAtleta,
    cittadinanzaAtleta: req.body.cittadinanzaAtleta,
    nazAtleta: req.body.nazAtleta,
    scuolaAtleta: req.body.scuolaAtleta,
    classeAtleta: req.body.classeAtleta,

    nomeGenitore: req.body.nomeGenitore,
    cognomeGenitore: req.body.cognomeGenitore,
    nascitaGenitore: req.body.nascitaGenitore,
    luogoNascitaGenitore: req.body.luogoNascitaGenitore,
    provNascitaGenitore: req.body.provNascitaGenitore,
    sessoGenitore: req.body.sessoGenitore,
    indirizzoGenitore: req.body.indirizzoGenitore,
    civicoGenitore: req.body.civicoGenitore,
    capGenitore: req.body.capGenitore,
    comuneGenitore: req.body.comuneGenitore,
    provGenitore: req.body.provGenitore,
    codfiscGenitore: req.body.codfiscGenitore,
    emailGenitore: req.body.emailGenitore,
    telefonoGenitore: req.body.telefonoGenitore,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
