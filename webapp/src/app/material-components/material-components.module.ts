import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatInputModule, MatMenuModule} from '@angular/material';

const materialModules = [
  FormsModule,
  BrowserAnimationsModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatMenuModule
];

@NgModule({
  imports:  materialModules,
  exports:  materialModules,
  declarations: []
})
export class MaterialComponentsModule { }
