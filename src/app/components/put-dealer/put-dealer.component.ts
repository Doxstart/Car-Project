import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CarDealer, Cars, ICarDealer, ICars } from 'src/app/models/car.models';

@Component({
  selector: 'app-put-dealer',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './put-dealer.component.html',
  styleUrls: ['./put-dealer.component.scss']
})
export class PutDealerComponent {
  @Input() dealerObj: ICarDealer = new CarDealer();
  carObj: ICars = new Cars();

  @Output() onEditClick: EventEmitter<{ dealerObj: ICarDealer, carObj: ICars}> = new EventEmitter();
  @Output() onNoClick: EventEmitter<any> = new EventEmitter();

  // When NO gets clicked, the result returned to the home.component is FALSE
  onNo(): void {
    this.onNoClick.emit()
  }

  onEdit(){
    this.onEditClick.emit({ dealerObj : this.dealerObj, carObj : this.carObj});
  }
}
