using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace ContactWebApi.Models
{
    public class ContactContext : DbContext
    {
        public ContactContext(DbContextOptions<ContactContext> options)
            : base(options)
        { }

        public DbSet<Contact> Blogs { get; set; }
        
    }
 }