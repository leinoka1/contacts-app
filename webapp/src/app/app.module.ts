import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {ContactComponent} from './contact/contact.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatIconModule, MatInputModule, MatListModule, MatMenu,
  MatMenuTrigger, MatSidenavModule, MatToolbarModule
} from '@angular/material';
import {ContactLocalStorageService} from './contact/services/contact-local-storage.service';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {ContactListItemComponent} from './contact/contact-list/contact-list-item/contact-list-item.component';
import {AddContactComponent} from './contact/add-contact/add-contact.component';
import {RouterModule, Routes} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialComponentsModule} from './material-components/material-components.module';
import {ContactAddressPipe} from './contact/pipes/contact-address.pipe';
import {ContactDetailComponent} from './contact/contact-list/contact-detail/contact-detail.component';
import {WelcomePhaseComponent} from './contact/welcome-phase/welcome-phase.component';
import {ContactService} from './contact/services/contact.service';
import {ContactHttpService} from './contact/services/contact-http.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './user/login/login.component';
import {AppLayoutComponent} from './layout/app-layout/app-layout.component';
import {AuthenticationService} from './user/services/authentication.service';
import {UserService} from './user/services/user.service';
import {CaHttpInterceptor} from './config/ca-http-interceptor';
import { LoginErrorComponent } from './user/login/login-error/login-error/login-error.component';
import { MatDialogModule } from '@angular/material';
import {LoginErrorService} from './user/services/login-error.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    /* path: '',  -- use this empty path for ContactListComponent -- */
    path: '',
    component: LoginComponent
  },
  {
    path: 'ca',
    component: AppLayoutComponent,
    children: [
      {
        path: 'contact-list',
        component: ContactListComponent
      },
      {
        path: 'contact-list-item',
        component: ContactListItemComponent
      },
      {
        path: 'welcome-phase',
        component: WelcomePhaseComponent
      },
      {
        path: 'contact-detail',
        component: ContactDetailComponent
      },
      {
        path: 'login-error',
        component: LoginErrorComponent
      }
    ]
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
    WelcomePhaseComponent,
    AppLayoutComponent,
    LoginComponent,
    LoginErrorComponent
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
    MatSidenavModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [ContactLocalStorageService,
    ContactService,
    ContactHttpService,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CaHttpInterceptor,
      multi: true
    },
    LoginErrorService
  ],
  entryComponents: [
    LoginErrorComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


