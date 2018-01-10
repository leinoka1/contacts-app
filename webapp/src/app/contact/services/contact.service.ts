import {Injectable} from '@angular/core';
import {ContactLocalStorageService} from './contact-local-storage.service';
import {ContactHttpService} from './contact-http.service';
import {Observable} from 'rxjs/Observable';
import {Contact} from './contact';

@Injectable()
export class ContactService {
  private contacts: Contact[];
  constructor(private localStorage: ContactLocalStorageService, private contactHttpService: ContactHttpService) {

  }

  findContacts(): Observable<Contact[]> {
    // return this.localStorage.getContacts();
    // this.contactHttpService.get();
    return this.contactHttpService.get();
  }

  findContactById() {

  }

  addContact(contact: Contact) {
    console.log('First Name to be added: ', contact.firstName);
    return this.contactHttpService.create(contact);
  }

  deleteContact(id: number) {
    return this.contactHttpService.delete(id);
  }

}
