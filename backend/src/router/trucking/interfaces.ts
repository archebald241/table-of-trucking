import { Request } from "express";
import { ITruckingCreate } from "../../database/models/trucking/interface";

type filter = {
  value: string;
  searchBy: string;
  searchDesc: string;
}

type order = {
  orderBy: string;
  orderDesc: string;
}

export interface ITruckingReq extends Request {
  page: number;
  perPage: number;
  filter: filter;
  order: order;
}

export interface ITruckingCreateReq extends Request, ITruckingCreate {}