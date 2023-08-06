import axios from "axios";

export const getBankDetail = async (idBank: number) => {
  const res = await axios.get(
    ` https://my-json-server.typicode.com/fred-ng/transwap-coding-challenge/banks/${idBank}`
  );
  return res.data;
};

export const getCountry = async () => {
  const res = await axios.get(
    "https://my-json-server.typicode.com/fred-ng/transwap-coding-challenge/countries"
  );
  return res.data;
};
