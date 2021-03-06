﻿using ContactWebApi.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactWebApi.Services;
using Microsoft.AspNetCore.Authorization;

namespace ContactWebApi.Controllers
{
    [Authorize]
    [Route("api/contacts")]
    public class ContactsController : Controller

    {
        private readonly IContactService _contactService;

        public ContactsController(IContactService contactService)
        {
            _contactService = contactService;
        }
        [HttpGet]
        public IActionResult Get()
        {
            var contacts = _contactService.FindContacts();
            return new JsonResult(contacts);
      
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var contact = _contactService.FindContactById(id);
            return new JsonResult(contact);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Contact contact)
        {
            Console.Write(contact);
            _contactService.CreateNewContact(contact);
            return new JsonResult(contact);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _contactService.DeleteContact(id);
            return new NoContentResult();
        }
        
        [HttpPut("{id}")]
        public IActionResult UpdateOneContact(int id, [FromBody] Contact contact)
        {
            _contactService.UpdateOneContact(contact);
            return new JsonResult(contact);
        }
        
    }
}
