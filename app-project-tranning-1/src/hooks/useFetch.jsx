import {useQuery} from 'react-query'
import { getBankDetail } from '../API/Api'
import { getCountry } from '../API/Api'

 const QUERY_KEY = {
  useGetCountry: ['fetchData'],
}

const getBankDetailQueryKey = (id) => {
  return ['fetchDataBankDetail', id]
};


// Using the hook
export const useBankDetail = (idBank) =>{
  return useQuery(getBankDetailQueryKey(idBank), () => getBankDetail(idBank))
}

export const useCountry = () =>{
  const {data, isLoading} = useQuery(QUERY_KEY.useGetCountry,getCountry);
  return {data, isLoading}
}
