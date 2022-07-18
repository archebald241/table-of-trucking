import { OperatorsAliases } from "sequelize";
import { Op } from "sequelize";
import { ITruckingCreate, ITrucking } from "../../database/models/trucking/interface";
import { trucking } from "../../database/models/trucking/truckingModel";
import { ITruckingReq } from "../../router/trucking/interfaces";
import { ApplicationError, HTTPStatus } from "../../utils/etc";
import { SearchDesk } from "./interfaces";

export class TruckingService {
  static async createNewTrucking(truckingData: ITruckingCreate): Promise<ITrucking> {
    const newTrucking = await trucking.create(truckingData);

    return newTrucking;
  }

  static async getTruckingList(dateReq: ITruckingReq): Promise<ITrucking[]> {
    const { 
      page,
      perPage,
      filter,
      order,
    } = dateReq;

    const response = await trucking.findAll(
      {
        offset: page * perPage,
        limit: perPage,
        order: [
          [order.orderBy, order.orderDesc]
        ],
        where: {
          [filter.searchBy]: {
            [this.getTruckingListCondition(filter.searchDesc as SearchDesk) as string]: filter.value,
          }          
        }
      });

    return response;
  } 

  private static getTruckingListCondition(searchDesk: SearchDesk): any {
    switch(searchDesk) {
      case SearchDesk.equal:
        return Op.eq;
      case SearchDesk.greaterThan:
        return Op.gt;
      case SearchDesk.lessThan:
        return Op.lt;
      case SearchDesk.in:
        return Op.in;
      default:
        throw new ApplicationError(HTTPStatus.BAD_REQUEST, "Wrong Search Desk");
    }
  }
}