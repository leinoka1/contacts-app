using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace ContactWebApi.Models
{
    public class Contact
    {
        [Key]
        public int Id { get; set; }
       
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        [JsonProperty("address")]
        public string StreetAddress { get; set; }
        public string City { get; set; }

        public Contact()
        {
        }

        public Contact(int id, string firstName, string lastName, string streetAddress, string phoneNumber, string city)
        {
            Id = id;
            FirstName = firstName;
            LastName = lastName;
            StreetAddress = streetAddress;
            PhoneNumber = phoneNumber;
            City = city;
        }
    }
}

