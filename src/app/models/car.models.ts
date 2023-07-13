export type Car = ICar[]

export interface ICar {
  id: number
  name: string
  brand: string
  weight: number
  speed: number
  maxSpeed: number
  displacement: number
}
