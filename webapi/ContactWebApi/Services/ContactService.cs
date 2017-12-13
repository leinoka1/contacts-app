using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using ContactWebApi.Models;
using ContactWebApi.Repositories;

namespace ContactWebApi.Services
{
    public class ContactService : IContactService
    {
        private readonly IContactRepository _contactRepository;

        public ContactService(IContactRepository contactRepository)
        {
            _contactRepository = contactRepository;
        }

        public List<Contact> FindContacts()
        {
            return _contactRepository.GetAll();
        }

        public  Contact FindContactById(int id)
        {
            return _contactRepository.GetById(id);
        }

        public void CreateNewContact(Contact contact)
        {
            _contactRepository.Create(contact);
          //  return _contactRepository.Create();
        }

        public void DeleteContact(int id)
        {
            
            _contactRepository.DeleteById(id);
        }

        public void UpdateOneContact(Contact contact)
        {
            _contactRepository.UpdateOneContact(contact);
        }
        
    } 
}
