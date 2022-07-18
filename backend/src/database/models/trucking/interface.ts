export interface truckingAttributes {
  id?: number,
  name: string,
  date: Date,
  count: number,
  distance: number
}

export interface ITruckingCreate {
  name: string,
  date: Date,
  count: number,
  distance: number
}


export interface ITrucking {
  id: number,
  name: string,
  date: Date,
  count: number,
  distance: number
}