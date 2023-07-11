import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  displayedColumns: string[] = ['targa', 'concessionario', 'marchio', 'maxSpeed', 'cilindrata', 'edit', 'delete'];
  dataSource = ELEMENT_DATA;
}

export interface Cars {
  targa: string;
  concessionario: string;
  marchio: string;
  maxSpeed: number;
  cilindrata: number;
}

const ELEMENT_DATA: Cars[] = [
  {targa: "AA000AA", concessionario: 'Hydrogen', marchio: "Mercedes", maxSpeed: 350, cilindrata: 250},
  {targa: "AA001AA", concessionario: 'Helium', marchio: "Ferrari", maxSpeed: 350, cilindrata: 250},
  {targa: "AA002AA", concessionario: 'Lithium', marchio: "Fiat", maxSpeed: 350, cilindrata: 250},
  {targa: "AA003AA", concessionario: 'Beryllium', marchio: "Lamborghini", maxSpeed: 350, cilindrata: 250},
  {targa: "AA004AA", concessionario: 'Boron', marchio: "BMW", maxSpeed: 350, cilindrata: 250},
  {targa: "AA005AA", concessionario: 'Carbon', marchio: "Opel", maxSpeed: 350, cilindrata: 250},
  {targa: "AA006AA", concessionario: 'Nitrogen', marchio: "Alfa", maxSpeed: 350, cilindrata: 250},
  {targa: "AA007AA", concessionario: 'Oxygen', marchio: "Honda", maxSpeed: 350, cilindrata: 250},
  {targa: "AA008AA", concessionario: 'Fluorine', marchio: "Fiat", maxSpeed: 350, cilindrata: 250},
  {targa: "AA009AA", concessionario: 'Neon', marchio: "Maserati", maxSpeed: 350, cilindrata: 250},
];
