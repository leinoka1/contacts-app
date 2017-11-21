using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactWebApi.Models
{
    public class Contact
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string StreetAdderess { get; set; }
        public string Phone { get; set; }
        public string City { get; set; }


        public Contact(int id, string firstName, string lastName, string streetAdderess, string phone, string city)
        {
            Id = id;
            FirstName = firstName;
            LastName = lastName;
            StreetAdderess = streetAdderess;
            Phone = phone;
            City = city;
        }
    }
}

