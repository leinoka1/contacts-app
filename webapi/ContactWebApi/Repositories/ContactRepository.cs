using ContactWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using ContactWebApi.Config;

namespace ContactWebApi.Repositories
{
    public class ContactRepository : IContactRepository
    {
        private List<Contact> _contacts;
        private readonly ContactsDbContext _context;

        public ContactRepository(ContactsDbContext context)

        {
            _context = context;
            // _contacts = new List<Contact>();
            // Initialize();

        }

        public List<Contact> GetAll()
        {
            return _context.Contacts.ToList();
        }

        public Contact GetById(int id)
        {
            return _context.Contacts.FirstOrDefault(c => c.Id == id);
        }

        public void Create(Contact contact)
        {
            _context.Contacts.Add(contact);
            _context.SaveChanges();

        }

        public void DeleteById(int id)
        {
            var contact = _contacts.FirstOrDefault(c => c.Id == id);
            _contacts.Remove(contact);
        }

        /*public void UpdateById(int id)
        {
            var contact = _contacts.FirstOrDefault(c => c.Id == id);
            _contacts.Insert(id, contact);
        }
        
        */
        /*
        public void UpdateOneContact(Contact contact)
        {
            var i = _contacts.FindIndex(c => c.Id == contact.Id);
            _contacts[i] = contact;
        }
        */
        /*
        private void Initialize()
        {
            _contacts = new List<Contact>()

            {
                new Contact(1, "Sami", "Anttonen", "01234567", "Skinnarilankatu 1", "Lappeenranta"),
                new Contact(2, "Kari", "Leino", "0400753143", "KK17", "Lpr")
            };
        }
        */
    }

    internal class ContactDbContext
    {
    }
}
