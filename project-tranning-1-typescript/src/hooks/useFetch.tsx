import { useQuery } from "react-query";
import { getBankDetail, getCountry } from "@/api";

// interface BankDetail {
//   id: number;
//   name: string;
//   hotline: string;
//   logoUrl: string;
// }

interface Country {
  id: number;
  name: string;
  isComing: boolean;
  thumbnailUrl: string;
  supportedBanks: { id: number; name: string; isActive: boolean }[];
}

const QUERY_KEY = {
  useGetCountry: ["fetchData"],
  useGetBankDetailQueryKey: "fetchDataBankDetail",
};

// const getBankDetailQueryKey = (id: number) => {
//   return ["fetchDataBankDetail", id];
// };

// Using the hook
export const useBankDetail = (idBank: number) => {
  const { data, isLoading, error } = useQuery(
    [QUERY_KEY.useGetBankDetailQueryKey, idBank],
    () => getBankDetail(idBank)
  );
  return { data, isLoading, error };
};

export const useCountry = () => {
  const { data, isLoading, error } = useQuery<Country[]>(
    QUERY_KEY.useGetCountry,
    getCountry
  );
  return { data, isLoading, error };
};
