import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from './services/contact';
import {ContactService} from './services/contact.service';

@Component({
  selector: 'ca-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title: string;
  contacts: Contact[];
  @Output() contactSelected: EventEmitter<Contact>;
  newContact: Contact;

  constructor(private contactService: ContactService) {
      this.title = 'Contact List';
      this.contacts = [];
      this.contactSelected = new EventEmitter();
      this.newContact = new Contact();
     }

  ngOnInit() {

    this.contacts = this.contactService.getContacts();
  }
  /*
  showContactList(contact: Contact) {
    this.contactSelected.emit(contact);
    console.log(contact);
  }
  */
  showContactList(contact: Contact) {
    /*this.contactSelected.emit(contact);*/
    console.log('contact component says: ' + this.contacts);
  }
}
