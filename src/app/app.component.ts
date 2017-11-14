import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Contact} from './contact/services/contact';

@Component({
  selector: 'ca-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedContact: string;

  constructor(private router: Router) {
    this.selectedContact = 'ekoodi';
  }

  changeContact(): void {
    console.log(this.selectedContact);
    this.selectedContact = '3k00d1';
  }

  onContactSelected(contact: Contact) {
    console.log(contact);
  }

  showContactList(contact: Contact) {
    this.router.navigate(['/contact-list']);
  }

  showWelcomeList() {
    this.router.navigate(['/welcome-phase']);
    console.log('welcome');
  }
  editContact() {
    this.router.navigate(['/contact-detail']);
    console.log('edit');
  }
}
