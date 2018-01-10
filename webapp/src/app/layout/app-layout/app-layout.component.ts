import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Contact} from '../../contact/services/contact';

@Component({
  selector: 'ca-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent {

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

  showContactList(contact?: Contact) {
    this.router.navigate(['/ca/contact-list']);
  }

  showWelcomeList() {
    this.router.navigate(['/ca/welcome-phase']);
    console.log('welcome');
  }
  editContact() {
    this.router.navigate(['/ca/contact-detail']);
    console.log('edit mode');
  }
  addContact() {
    this.router.navigate(['/ca/contact-detail']);
    console.log('add mode');
  }

}
