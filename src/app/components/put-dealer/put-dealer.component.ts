import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

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

}
