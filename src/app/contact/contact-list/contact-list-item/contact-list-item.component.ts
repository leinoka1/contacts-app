import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Contact} from '../../services/contact';
import {ContactService} from '../../services/contact.service';
// import {ContactDetailComponent} from './contact-detail';

@Component({
  selector: 'ca-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {
  @Input() contact: Contact;

  public title: string;
  selectedContact: Contact;
  constructor(private contactService: ContactService, private router: Router) {
  this.title = 'Contact List Item';

  /*this.contactSelected = new EventEmitter();
  this.newContact = new Contact();*/
}
  onContactEdit() {
    // this.selectedContact = contact;
    console.log ('on contact go on edit it ...from contact list item');
    // console.log ('on contact go on edit it ...from contact list item' + this.selectedContact.firstName);
    // this.contactService.editContact(this.contact);
    this.router.navigate(['/contact-detail']);
    // this.contactService.editContact(this.contact);
    // this.contactService.addContact(this.contact);
    // this.router.navigate(['/contact-list']);
    // Use router to navigate to contact list

  }
  ngOnInit() {

  }
}
