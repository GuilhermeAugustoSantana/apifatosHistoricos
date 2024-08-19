import express from 'express';
const app = express();

import { buscaFatoPorAno, validaAno } from './service/fatoHistoricoDoAno.js';


app.get('/', (req, res) => {
  let ano = req.query.ano;

  if (validaAno(ano)) {
    let fato = buscaFatoPorAno(ano);
    res.json({ fato: fato });
  } else {
    res.status(400).json({error: "Ano invalido"})
  }

})

app.listen(8080, () => {
  let data = new Date();
  console.log('Sistema iniciado em: ' + data);
})