const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  nomeAtleta:String,
  cognomeAtleta:String,
  nascitaAtleta: Date,
  luogoNascitaAtleta: String,
  provNascitaAtleta: String,
  sessoAtleta: String,
  indirizzoAtleta: String,
  civicoAtleta: Number,
  capAtleta: Number,
  comuneAtleta: String,
  provAtleta: String,
  codfiscAtleta: String,
  cittadinanzaAtleta: String,
  nazAtleta: String,
  scuolaAtleta: String,
  classeAtleta: String,

  nomeGenitore: String,
  cognomeGenitore: String,
  nascitaGenitore: String,
  luogoNascitaGenitore: String,
  provNascitaGenitore: String,
  sessoGenitore: String,
  indirizzoGenitore: String,
  civicoGenitore: Number,
  capGenitore: Number,
  comuneGenitore: String,
  provGenitore: String,
  codfiscGenitore: String,
  emailGenitore: String,
  telefonoGenitore: String
});

module.exports = mongoose.model('Posts', PostSchema);
