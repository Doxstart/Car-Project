import { trigger, state, style, transition, animate } from '@angular/animations';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CarDealer, Cars, ICarDealer, ICars } from 'src/app/models/car.models';
import { ConnectionService } from 'src/app/services/connection.service';
import { MatDialog } from '@angular/material/dialog';
import { PostDealerComponent } from '../post-dealer/post-dealer.component';
import { PostCarComponent } from '../post-car/post-car.component';
import { PutDealerComponent } from '../put-dealer/put-dealer.component';
import { PutCarComponent } from '../put-car/put-car.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

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
  carDealer: ICarDealer[] = [];

//Modifiche codice 25/07
  cars: Cars[] = [];
  carCombo: ICars = new Cars();
  dealerId!: number;
  dealer: ICarDealer[] = [];
//Fine Modifiche

  constructor(private readonly connServ: ConnectionService, private cd: ChangeDetectorRef, public dialog: MatDialog) {}
  ngOnInit(): void {
    this.connServ.getCars().subscribe({
      next: (data: ICarDealer[]) => (
        (this.carDealer = data),
        console.log(data),
        (this.dataSource = new MatTableDataSource(this.carDealer))
      ),
      error: (err: any) => console.log(err),
    });
  }

  getCars(): void {
    this.connServ.getCars().subscribe(data => {
      this.carDealer = data;
      (this.dataSource = new MatTableDataSource(this.carDealer))
    });
  }

  toggleRow(element: ICarDealer) {
    element.listofCars && element.listofCars.length ? (this.expandedElement = this.expandedElement === element ? null : element) : null;
    this.cd.detectChanges();
  }

  onAddDealer(){
    this.openPostDealerDialog();
  }

  openPostDealerDialog(){
    //Dialog Creation
    const dialogRef = this.dialog.open(PostDealerComponent, {
      width: '1000px',
    });
    dialogRef.componentInstance.onAddClick.subscribe(res => {
      let newDealer = {dealerId: res.dealerId, dealerName: res.dealerName, carList:[]}
      this.connServ.postDealer(newDealer).subscribe(() =>{
        this.getCars();
        dialogRef.close();
      }
    )});
    dialogRef.componentInstance.onNoClick.subscribe(() => {
      console.log('You decided to not add anything');
      dialogRef.close();
    });
  }

  onAddCar(){
    this.openPostCarDialog();
  }

  openPostCarDialog(){
    //Dialog Creation
    const dialogRef = this.dialog.open(PostCarComponent, {
      width: '1000px'
    });
    // Event management
    dialogRef.componentInstance.onAddClick.subscribe(res => {
      this.connServ.postCars(res.dealerId, res.carObj).subscribe(() =>{
        this.getCars();
        dialogRef.close();
      }
    )});
    dialogRef.componentInstance.onNoClick.subscribe(() => {
      console.log('You decided to not add anything');
      dialogRef.close();
    });
  }

  // PUT (DEALER)
  onEditDealer(dealer: ICarDealer){
    this.openEditDealerDialog(dealer);
  }

  openEditDealerDialog(dealer: ICarDealer){
    //Dialog Creation
    const dialogRef = this.dialog.open(PutDealerComponent, {
      width: '1000px',
    });
    // Event management
    dialogRef.componentInstance.dealerObj = new CarDealer({
      dealerId: dealer.dealerId,
      dealerName: dealer.dealerName,
      listofCars: dealer.listofCars
    });
    dialogRef.componentInstance.onEditClick.subscribe(res =>{
      console.log(res.dealerObj);
      this.connServ.putDealer(res.dealerObj.dealerId!, res.dealerObj).subscribe(() =>{
        this.getCars();
        dialogRef.close();
      })
    });
    dialogRef.componentInstance.onNoClick.subscribe(() => {
      console.log('You decided to not edit anything');
      dialogRef.close();
    });
  }

  // PUT (CAR)
  onEditCar(car: ICars){
    this.openEditCarDialog(car);
  }

  openEditCarDialog(car: ICars){
  //Dialog Creation
    const dialogRef = this.dialog.open(PutCarComponent, {
      width: '1000px',
    });
    // Event management
    dialogRef.componentInstance.carObj = new Cars({
      id: car.id,
      name: car.name,
      plate: car.plate,
      brand: car.brand,
      weight: car.weight,
      speed: car.speed,
      maxSpeed: car.maxSpeed,
      displacement: car.displacement
    });
    dialogRef.componentInstance.onEditClick.subscribe(res =>{
      this.connServ.putCar(res.carObj.id!, res.carObj).subscribe(() =>{
        this.getCars();
        dialogRef.close();
      })
    });
    dialogRef.componentInstance.onNoClick.subscribe(() => {
      console.log('You decided to not edit anything');
      dialogRef.close();
    });
  }

  //DELETE
  onDelete(car: ICars) {
    console.log('Clicked car', car);
    this.openDeleteDialog(car.id!);
  }

  openDeleteDialog(carId: number): void {      // Gets the CarId attribute as parameter
    //Dialog Creation
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '300px',
      data: { id: carId }
    });

    // When dialog is closed, check the result and, if true, launch the DELETE method
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.connServ.deleteCar(carId).subscribe(() => {
          console.log('Car deleted');
          this.getCars();
        },
        error => {
          console.error('Error deleting car', error);
        });
      }
      else {
        console.log('No delete performed');
      }
    });
  }

}
