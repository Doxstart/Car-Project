export interface ICarDealer {
  dealerId?: number
  dealerName?: string
  listofCars?: ICars[]
}

export class CarDealer implements ICarDealer {
  dealerId!: number
  dealerName!: string
  listofCars!: ICars[]
  constructor(instance?: ICarDealer) {
    Object.assign(this, instance);
  }
}

export interface ICars {
  id?: number
  plate?: string
  name?: string
  brand?: string
  weight?: number
  speed?: number
  maxSpeed?: number
  displacement?: number
}

export class Cars implements ICars {
  id!: number;
  plate!: string
  name!: string
  brand!: string
  weight!: number;
  speed!: number;
  maxSpeed!: number
  displacement!: number
  constructor(instance?: ICars) {
    Object.assign(this, instance);
  }
}

