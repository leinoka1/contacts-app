import { Component, OnInit } from '@angular/core';
import {EventEmitter, Input } from '@angular/core';
import {Router} from '@angular/router';
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
  selectedContact: Contact;

  constructor(private contactService: ContactService, private router: Router) {
    this.title = 'Contact Detail';
    this.contact = new Contact();
  }

  onContactCreate() {
    console.log ('on contact go on..');

    this.contactService.addContact(this.contact);
    this.router.navigate(['/contact-list']);
    // Use router to navigate to contact list

  }
  onContactCancel() {
    console.log ('on contact Cancel operation');
    // Use contact service to add new contact
    // Use router to navigate to contact list
  }

  onContactEdit(contact: Contact) {
    this.selectedContact = contact;
    console.log ('on contact go on edit it ...from contact detail' + this.selectedContact.firstName);
    // console.log('on contact go on edit it at detail ...' + );
    // this.contactService.editContact(this.contact);
    // this.contactService.addContact(this.contact);
    // this.router.navigate(['/contact-detail']);
    // this.router.navigate(['/contact-list']);
    // Use router to navigate to contact list
  }
  onContactSelected(contact: Contact) {
    console.log('contact selected .. from detail component');
  }
  ngOnInit() {
  }
}
