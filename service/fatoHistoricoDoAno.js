import fatosHistoricos from "../dados.js";

export function buscaFatoPorAno(ano) {
  const fatoDoAno = fatosHistoricos.find((fatos) => fatos.Ano == ano);
  return fatoDoAno.Fato;
}

export function validaAno(ano) {
  if (ano != /[a-zA-Z]/ && ano.length == 4 && ano >= 1920 && ano <= 2020) {
    return true
  }
}

