import { trigger, state, style, transition, animate } from '@angular/animations';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ICarDealer, ICars } from 'src/app/models/car.models';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = [
    'dealerId',
    'dealerName',
  ];
  secondaryColumns: string[] = [
    'id',
    'plate',
    'name',
    'brand',
    'speed',
    'maxSpeed',
    'weight',
    'displacement'
  ];
  secondaryDisplayColumns = [...this.secondaryColumns, 'edit', 'delete'];
  expandedElement!: ICarDealer | null;
  dataSource!: any;
  car: ICarDealer[] = [];

  constructor(private readonly connServ: ConnectionService, private cd: ChangeDetectorRef) {}
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

  toggleRow(element: ICarDealer) {
    element.listofCars && element.listofCars.length ? (this.expandedElement = this.expandedElement === element ? null : element) : null;
    this.cd.detectChanges();
  }

  onDelete(id: ICars) {
    console.log('Clicked car', id);
    this.connServ.deleteCar(id).subscribe({
      next: (res) => { alert('Car Deleted!'); },
      error: (err) => console.log(err)
    });
  }

}
