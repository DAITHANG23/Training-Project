import { useQuery } from "react-query";
import { getBankDetail } from "../api";
import { getCountry } from "../api";

const QUERY_KEY = {
  useGetCountry: ["fetchData"],
  useGetBankDetail: "fetchDataBankDetail",
};

// Using the hook
export const useBankDetail = (idBank) => {
  return useQuery([QUERY_KEY.useGetBankDetail, idBank], () =>
    getBankDetail(idBank)
  );
};

export const useCountry = () => {
  const { data, isLoading } = useQuery(QUERY_KEY.useGetCountry, getCountry);
  return { data, isLoading };
};
