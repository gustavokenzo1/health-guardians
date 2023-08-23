import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Host: "gds.proepi.org.br",
    'Content-Type': 'application/json',
    'User-Agent': 'GuardioesDaSaude/60 CFNetwork/1410.0.3 Darwin/22.6.0',
    Accept: 'application/vnd.api+json',
    'Accept-Language': 'pt-BR,pt;q=0.9',
  }
});

export default api;
