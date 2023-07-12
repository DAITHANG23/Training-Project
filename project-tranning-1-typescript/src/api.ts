import axios from "axios";

export const getBankDetail = (idBank: number) => {
  return axios.get(
    ` https://my-json-server.typicode.com/fred-ng/transwap-coding-challenge/banks/${idBank}`
  );
};

export const getCountry = async () => {
  const res = await axios.get(
    "https://my-json-server.typicode.com/fred-ng/transwap-coding-challenge/countries"
  );
  return res.data;
};
