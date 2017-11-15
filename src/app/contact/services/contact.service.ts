import {Injectable} from '@angular/core';
import {Contact} from './contact';
import {Router} from '@angular/router';

@Injectable()
export class ContactService {
  private contacts: Contact[];


  constructor() {

    this.contacts = [
      new Contact(1, 'Sami', 'Anttonen', '+35844003355', 'Valtakatu 1', 'KVL'),
      new Contact(2, 'Kari', 'Leino', '+3584002211', 'Kk 17', 'LPR'),
    ];
  }


  getContacts(): Contact[] {
    return this.contacts;
  }

  addContact(contact: Contact) {
    let contactId;
    if (this.contacts.length === 0) {
      contactId = 1;
    } else {
      const ids = this.contacts.map(c => c.id);
      console.log(ids);
      const maxId = Math.max(...ids);
      console.log('Max id: ' + maxId);
      contactId = maxId + 1;
      console.log('Next id: ' + contactId);
    }
    contact.id = contactId;
    this.contacts.push(Object.assign({}, contact));
  }
}
