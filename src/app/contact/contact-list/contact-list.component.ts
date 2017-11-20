import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Contact} from '../services/contact';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'ca-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  title: string
  contacts: Contact [];
  @Output() contactSelected: EventEmitter<Contact>;

  newContact: Contact;

  constructor(private contactService: ContactService, private router: Router) {
    this.title = 'Contact List';
    this.contacts = [];
    this.contactSelected = new EventEmitter();
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    console.log(this.contacts);
  }

  onContactSelect(contact: Contact) {
    // this.contactSelected.emit(contact);
    console.error(contact);
    this.router.navigate(['/contact-detail']);
  }

  addContact() {
    this.contactService.addContact(this.newContact);
  }
  showContactList() {
    console.log('..from contact list component' + this.contacts);
  }
  showWelcomeList() {
    console.log ('WelcomeList..');
  }
}
