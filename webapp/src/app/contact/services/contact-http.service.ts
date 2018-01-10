import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Contact} from './contact';
import 'rxjs/add/operator/map';
import {environment} from '../../../environments/environment';

@Injectable()
export class ContactHttpService {
  private url: string;

  constructor(private http: HttpClient) {
    // this.url = environment.endpointUrl + '/contacts';
    this.url = environment.endpointUrl + 'contacts';
  }

  get(): Observable<Contact[]> {
    return this.http.get(this.url).map((response) => {
      return response as Contact[];
    } );
  }
  create(contact: Contact) {
    console.log(contact.firstName);
    console.log(contact.address);
    return this.http.post(this.url, contact).subscribe();
  }
  delete (id: number) {
    return this.http.delete(this.url, id).subscribe();
  }
}

