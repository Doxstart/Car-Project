import { Component, OnInit } from '@angular/core';
import { TableTemplates } from 'primeng/table';
import { ICarDealer, ICars } from 'src/app/models/car.models';
import { ConnectionService } from 'src/app/services/connection.service';

interface Column {
  field: string;
  header: string | number;
}

@Component({
  selector: 'app-prime-table',
  templateUrl: './prime-table.component.html',
  styleUrls: ['./prime-table.component.scss']
})
export class PrimeTableComponent implements OnInit{
  carDealer!: ICarDealer[];
  car!: ICars[];

  cols!: Column[];

  onAddDealer(){}
  onAddCar(){}

  constructor(private readonly connServ: ConnectionService) {}

  ngOnInit(): void {
    this.getData();

    this.cols = [{ field: 'dealerId', header: 'Dealer Id' },
      { field: 'dealerName', header: 'Dealer Name' },
    ]
  }

  getData(){
    this.connServ.getCars().subscribe((data) => this.carDealer = data)
  }

  onEditCar(e: any){}
  onDelete(e: any){}
  onEditDealer(e: any){}

}
