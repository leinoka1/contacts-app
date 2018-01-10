import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'ca-login-error',
  templateUrl: './login-error.component.html',
  styleUrls: ['./login-error.component.css']
})

export class LoginErrorComponent {

  public title: string;
  public message: string;

    constructor(public dialogRef: MatDialogRef <LoginErrorComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
      this.title = this.data.title;
      this.message = this.data.message;
    }
    onNoClick(): void {
      this.dialogRef.close();
    }
}

