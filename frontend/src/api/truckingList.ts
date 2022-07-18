import axios, { AxiosError } from "axios";
import { IData, ITruckingList } from "../types/truckingList";





export const fetchTruckingList = async (dataRespone: IData): Promise<ITruckingList> => {

    const responceData: ITruckingList = {
        count: 10,
        page: 1,
        perPage: 10,
        truckingList: [
            {
                id: "13123",
                date: "12.02.2022",
                count: 123,
                distanse: 123,
                name: "NAME"
            },
            {
                id: "13123",
                date: "12.02.2022",
                count: 123,
                distanse: 123,
                name: "NAME"
            },
            {
                id: "13123",
                date: "12.02.2022",
                count: 123,
                distanse: 123,
                name: "NAME"
            },
            {
                id: "13123",
                date: "12.02.2022",
                count: 123,
                distanse: 123,
                name: "NAME"
            },
            {
                id: "13123",
                date: "12.02.2022",
                count: 123,
                distanse: 123,
                name: "NAME"
            },
            {
                id: "13123",
                date: "12.02.2022",
                count: 123,
                distanse: 123,
                name: "NAME"
            },
            {
                id: "13123",
                date: "12.02.2022",
                count: 123,
                distanse: 123,
                name: "NAME"
            },
            {
                id: "13123",
                date: "12.02.2022",
                count: 123,
                distanse: 123,
                name: "NAME"
            },
            {
                id: "13123",
                date: "12.02.2022",
                count: 123,
                distanse: 123,
                name: "NAME"
            },
            {
                id: "13123",
                date: "12.02.2022",
                count: 123,
                distanse: 123,
                name: "NAME"
            }
        ]
    }
    // return await axios.post("http://localhost:3030/trucking/list", dataRespone)
    //     .then(responce => {
    //         const data = responce.data;
    //         return responceData;
    //     })
    //     .catch((error: AxiosError) => {
    //         console.log(error);
    //         return [];
    //     });
    return responceData
}