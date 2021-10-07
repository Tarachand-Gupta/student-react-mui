import { useQuery, UseQueryOptions } from "react-query";
import getAxiosInstance from "../Config/axios";


type FetchApiOptions = {
  url: string;
  params?: any;
};

const fetchApiData = async (url: string, params: any) => {
  const axios = await getAxiosInstance();
  const { data } = await axios.post(url, {
    params,
  });
  return data;
};

export const useReactQuery = (
  identifier: (string | number | undefined)[],
  { url, params = {} }: FetchApiOptions,
  options?:
    | UseQueryOptions<any, unknown, any, (string | number | undefined)[]>
    | undefined
) => {
  return useQuery(identifier, () => fetchApiData(url, params), options);
};
