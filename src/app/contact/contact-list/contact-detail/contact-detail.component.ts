import { Component, OnInit } from '@angular/core';
import {EventEmitter, Input } from '@angular/core';
import {Contact} from '../../services/contact';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'ca-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})

export class ContactDetailComponent implements OnInit {

  public contact: Contact;
  public title: string;

  constructor(private contactService: ContactService) {
    this.title = 'Contact Detail';
    this.contact = new Contact();
  }

  onContactCreate() {
    console.log ('on contact go on..');
    this.contactService.addContact(this.contact);
    // Use router to navigate to contact list
  }
  onContactCancel() {
    console.log ('on contact Cancel operation');
    // Use contact service to add new contact
    // Use router to navigate to contact list
  }
  ngOnInit() {
  }
}
