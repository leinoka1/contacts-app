using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactWebApi.Models;

namespace ContactWebApi.Services
{
    public interface IContactService
    {
        List<Contact> FindContacts();
        Contact FindContactById(int id);
        void CreateNewContact(Contact contact);
        void DeleteContact(int id);
        void UpdateOneContact(Contact contact);

    }
}
