import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatIconModule, MatInputModule, MatListModule, MatMenu,
  MatMenuTrigger, MatSidenavModule, MatToolbarModule
} from '@angular/material';
import {ContactService} from './contact/services/contact.service';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {ContactListItemComponent} from './contact/contact-list/contact-list-item/contact-list-item.component';
import {AddContactComponent} from './contact/add-contact/add-contact.component';
import {RouterModule, Routes} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialComponentsModule} from './material-components/material-components.module';
import { ContactAddressPipe } from './contact/pipes/contact-address.pipe';
import { ContactDetailComponent } from './contact/contact-list/contact-detail/contact-detail.component';
import { WelcomePhaseComponent } from './contact/welcome-phase/welcome-phase.component';

const routes: Routes = [
  {
    /* path: '',  -- use this empty path for ContactListComponent -- */
    path: '',
    component: ContactListComponent
  },
  {
    path: 'contact-list',
    component: ContactListComponent
  },
  {
    path: 'contact-list-item',
    component: ContactListItemComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactListComponent,
    ContactListItemComponent,
    AddContactComponent,
    ContactAddressPipe,
    ContactDetailComponent,
    WelcomePhaseComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule
   ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }


