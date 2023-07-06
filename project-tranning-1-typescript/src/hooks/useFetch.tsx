import {useQuery} from 'react-query'
import { getBankDetail } from '../API/api'
import { getCountry } from '../API/api'

 const QUERY_KEY = {
  useGetCountry: ['fetchData'],
}

const getBankDetailQueryKey = (id : number) => {
  return ['fetchDataBankDetail', id]
};


// Using the hook
export const useBankDetail = (idBank : number) =>{
  return useQuery(getBankDetailQueryKey(idBank), () => getBankDetail(idBank))
}

export const useCountry = () =>{
  const {data, isLoading, error} = useQuery(QUERY_KEY.useGetCountry,getCountry);
  return {data, isLoading, error}
}
