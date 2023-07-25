import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Cars, ICars } from 'src/app/models/car.models';

@Component({
  selector: 'app-put-car',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './put-car.component.html',
  styleUrls: ['./put-car.component.scss']
})
export class PutCarComponent implements OnInit{
  @Input() carObj : ICars = new Cars();
  @Input() dealerId!: number;

  @Output() onEditClick: EventEmitter<{ dealerId: number, carObj: ICars }> = new EventEmitter();
  @Output() onNoClick: EventEmitter<any> = new EventEmitter();

  constructor(){}

  ngOnInit(): void {
  }

  // When NO gets clicked, the result returned to the home.component is FALSE
  onNo(): void {
    this.onNoClick.emit()
  }

  onEdit(){
    this.onEditClick.emit({ dealerId: this.dealerId, carObj: this.carObj });
  }
}
