import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Contact} from '../../services/contact';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'ca-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {
  @Input() contact: Contact;

  public title: string;


  constructor(private contactService: ContactService) {
  this.title = 'Contact List Item';
  /*this.contactSelected = new EventEmitter();
  this.newContact = new Contact();*/
}

  ngOnInit() {

  }
}
