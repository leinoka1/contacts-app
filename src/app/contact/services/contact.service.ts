import {Injectable} from '@angular/core';
import {Contact} from './contact';

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
    this.contacts.push(Object.assign({}, contact));
  }
}

