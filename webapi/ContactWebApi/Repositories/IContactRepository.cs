using ContactWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactWebApi.Repositories
{
    public interface IContactRepository
    {
        List<Contact> GetAll();
        Contact GetById(int id);

        void Create(Contact contact);
        void DeleteById(int id);
        void UpdateOneContact(Contact contact);

        // TODO add, update, delete
    }
}
