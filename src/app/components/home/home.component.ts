import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ICar } from 'src/app/models/car.models';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  displayedColumns: string[] = ['targa', 'concessionario', 'marchio', 'maxSpeed', 'cilindrata', 'edit', 'delete'];
  dataSource: any;
  car: ICar[] = [];

  constructor(private readonly connServ: ConnectionService) {}
  ngOnInit(): void {
    this.connServ.getCars().subscribe({
      next: (data: ICar[]) => (
        this.car = data,
         console.log(data),
         this.dataSource = new MatTableDataSource(this.car)
      ),
      error: (err: any) => console.log(err)
    });
  }

}

// export interface Cars {
//   targa: string;
//   concessionario: string;
//   marchio: string;
//   maxSpeed: number;
//   cilindrata: number;
// }

// const ELEMENT_DATA: Cars[] = [
//   {targa: "AA000AA", concessionario: 'Hydrogen', marchio: "Mercedes", maxSpeed: 350, cilindrata: 250},
//   {targa: "AA001AA", concessionario: 'Helium', marchio: "Ferrari", maxSpeed: 350, cilindrata: 250},
//   {targa: "AA002AA", concessionario: 'Lithium', marchio: "Fiat", maxSpeed: 350, cilindrata: 250},
//   {targa: "AA003AA", concessionario: 'Beryllium', marchio: "Lamborghini", maxSpeed: 350, cilindrata: 250},
//   {targa: "AA004AA", concessionario: 'Boron', marchio: "BMW", maxSpeed: 350, cilindrata: 250},
//   {targa: "AA005AA", concessionario: 'Carbon', marchio: "Opel", maxSpeed: 350, cilindrata: 250},
//   {targa: "AA006AA", concessionario: 'Nitrogen', marchio: "Alfa", maxSpeed: 350, cilindrata: 250},
//   {targa: "AA007AA", concessionario: 'Oxygen', marchio: "Honda", maxSpeed: 350, cilindrata: 250},
//   {targa: "AA008AA", concessionario: 'Fluorine', marchio: "Fiat", maxSpeed: 350, cilindrata: 250},
//   {targa: "AA009AA", concessionario: 'Neon', marchio: "Maserati", maxSpeed: 350, cilindrata: 250},
// ];


