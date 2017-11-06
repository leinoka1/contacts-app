import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatInputModule, MatListModule} from '@angular/material';
import {ContactService} from './contact/services/contact.service';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {ContactListItemComponent} from './contact/contact-list/contact-list-item/contact-list-item.component';
import {AddContactComponent} from './contact/add-contact/add-contact.component';
import {RouterModule, Routes} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';


const routes: Routes = [
  {
    /* path: '',  -- use this empty path for ContactListComponent -- */
    path: 'add-contact',
    component: AddContactComponent
  }
  /*,

  {
    path: 'contact-list',
    component: ContactListComponentent
  }
*/
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactListComponent,
    ContactListItemComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }


