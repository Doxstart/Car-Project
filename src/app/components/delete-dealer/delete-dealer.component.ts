import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-delete-dealer',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './delete-dealer.component.html',
  styleUrls: ['./delete-dealer.component.scss']
})
export class DeleteDealerComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDealerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public connServ: ConnectionService
  ) {}

  // When NO gets clicked, the result returned to the home.component is FALSE
  onNoClick(): void {
    this.dialogRef.close(false);
  }

  // When YES gets clicked, the result returned to the home.component is TRUE
  onYesClick(): void {
    this.dialogRef.close(true);
  }
}
