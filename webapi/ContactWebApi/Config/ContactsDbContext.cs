using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactWebApi.Models;
using Microsoft.EntityFrameworkCore;

namespace ContactWebApi.Config
{
    public class ContactsDbContext : DbContext
    {
        public ContactsDbContext(DbContextOptions options) : base(options)
        {
            
        }
        public DbSet<Contact> Contacts { get; set; }

    }
}
