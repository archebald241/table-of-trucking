import { Request, Response, Router } from "express";
import { HTTPStatus } from "../../utils/etc";
import { ITruckingCreateReq, ITruckingReq } from "./interfaces";
import { TruckingService } from "../../services/trucking/truckingServise";
import { ITruckingCreate, ITrucking } from "../../database/models/trucking/interface";

export class TruckingRouter {
  private readonly router: Router;
  private readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.router = Router();
    this.baseUrl = baseUrl;
    this.initRoutes();
  }

  private initRoutes(): void {
    this.router.post(`${this.baseUrl}/list`, this.getTruckingList);
    this.router.post(`${this.baseUrl}/create`, this.createTrucking);
  }

  private async getTruckingList(req: Request, res: Response): Promise<void> {
    const response: ITrucking[] = await TruckingService.getTruckingList(req.body as ITruckingReq);

    res.status(HTTPStatus.SUCCESS)
      .json(response);
  }

  private async createTrucking(req: Request, res: Response): Promise<void> {
    const response: ITrucking = await TruckingService.createNewTrucking(req.body as ITruckingCreateReq);

    res.status(HTTPStatus.SUCCESS)
      .json(response);  
  }
};
