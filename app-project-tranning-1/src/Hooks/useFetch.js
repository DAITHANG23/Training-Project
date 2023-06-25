import {useQuery} from 'react-query'
import { getBankDetail } from './getApi'
import { getCountry } from './getApi'


// Using the hook
export const useBankDetail = (idBank) =>{
  return useQuery(['fetchDataBankDetail', idBank], () => getBankDetail(idBank))
}

export const useCountry = () =>{
  const {data, isLoading} = useQuery(['fetchData'],getCountry);
  return {data, isLoading}
}
