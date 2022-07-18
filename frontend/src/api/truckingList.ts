import axios, { AxiosError } from "axios";
import { IData, ITruckingCreate, ITruckingList } from "../types/truckingList";


export const fetchTruckingList = async (dataRespone: IData): Promise<ITruckingList> => {
    return await axios.post("http://localhost:3030/trucking/list", dataRespone)
        .then(responce => {
            const data = responce.data;
            return data;
        })
        .catch((error: AxiosError) => {
            console.log(error);
            return [];
        });
}

export const createTrucking = async (createData: ITruckingCreate) => {
    await axios.post("http://localhost:3030/trucking/create", createData)
}