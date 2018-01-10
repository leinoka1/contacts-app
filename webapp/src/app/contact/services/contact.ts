export class Contact {

  id: number;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  city: string;


  constructor(id?: number, firstName?: string, lastName?: string, address?: string, phoneNumber?: string, city?: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.city = city;
  }
}
