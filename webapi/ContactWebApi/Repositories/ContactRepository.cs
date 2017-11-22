using ContactWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace ContactWebApi.Repositories
{
    public class ContactRepository : IContactRepository
    {
        private List<Contact> _contacts; 

        public ContactRepository()

        {
            _contacts = new List<Contact>();
            Initialize();
            
        }

        public List<Contact> GetAll()
        {
            return _contacts;
        }

        public Contact GetById(int id)
        {
            return _contacts.FirstOrDefault(c => c.Id == id);
        }

        public void Create(Contact contact)
        {
            _contacts.Add(contact);
           
        }

        public void DeleteById(int id)
        {
            var contact = _contacts.FirstOrDefault(c => c.Id == id);
            _contacts.Remove(contact);
        }


        private void Initialize()
        {
            _contacts = new List<Contact>()

            {
                new Contact(1, "Sami", "Anttonen", "01234567", "Skinnarilankatu 1", "Lappeenranta"),
                new Contact(2, "Kari", "Leino", "0400753143", "KK17", "Lpr")
            };
        }
    }
}
