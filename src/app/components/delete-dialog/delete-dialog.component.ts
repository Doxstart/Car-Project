import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent {
  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public connServ: ConnectionService) {}

  // When NO gets clicked, the result returned to the home.component is FALSE
  onNoClick(): void {
    this.dialogRef.close(false);
  }

  // When YES gets clicked, the result returned to the home.component is TRUE
  onYesClick(): void {
    //This code does what the delete in homecomponent is already doing,
    // this.connServ.deleteCar(this.data.id).subscribe(() => {
    //   this.dialogRef.close(true);
    // }, error => {
    //   this.dialogRef.close(false);
    // });
    this.dialogRef.close(true);
  }
}
