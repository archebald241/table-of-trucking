export interface IFilter {
    value: string;
    searchBy: string;
    searchDesc: string;
}

export interface IOrder {
    orderBy: string;
    orderDesc: string;
}

export interface IData {
    page: number;
    perPage: number;
    filter: IFilter;
    order: IOrder;
}

export interface ITruckingItem {
    id: string;
    name: string;
    date: string;
    count: number;
    distanse: number;
}

export interface ITruckingList {
    truckingList: ITruckingItem[];
    page: number;
    perPage: number;
    count: number    
}

export interface ITruckingCreate {
    name: string,
    date: Date,
    count: number,
    distance: number
  }