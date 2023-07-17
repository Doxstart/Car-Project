export interface ICarDealer {
  dealerId: number
  listofCars: ICars[]
}

export interface ICars {
  id: number
  plate: string
  name: string
  brand: string
  weight: number
  speed: number
  maxSpeed: number
  displacement: number
}

