import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MatDialog, MatDialogRef} from '@angular/material';
import {LoginErrorComponent} from '../login/login-error/login-error.component';

@Injectable()

export class LoginErrorService {

  constructor(private dialog: MatDialog) {}

  public openLoginErrorDialog(errorMessage: any): Observable<boolean> {
    console.log('login error service has been activated... ');
    const dialogRef = this.dialog.open(LoginErrorComponent, {
     width: '250px',
     data: {title: errorMessage.title, message: errorMessage.message}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Login error dialog was closed');
      // this.errorMessage.title = result;
    });
    return;
  }
}
