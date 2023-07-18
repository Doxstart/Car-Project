import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ICarDealer } from 'src/app/models/car.models';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = [
    'DealerId',
    'CarId',
    'Plate',
    'Name',
    'Brand',
    'Speed',
    'MaxSpeed',
    'Weight',
    'Displacement',
    'edit',
    'delete',
  ];
  dataSource: any;
  car: ICarDealer[] = [];

  constructor(private readonly connServ: ConnectionService) {}
  ngOnInit(): void {
    this.connServ.getCars().subscribe({
      next: (data: ICarDealer[]) => (
        (this.car = data),
        console.log(data),
        (this.dataSource = new MatTableDataSource(this.car))
      ),
      error: (err: any) => console.log(err),
    });
  }
}
