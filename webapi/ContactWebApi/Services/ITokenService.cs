using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactWebApi.Controllers;
using ContactWebApi.Models;

namespace ContactWebApi.Services
{
    public interface ITokenService
    {
        Task<AccessToken> RequestAccessToken(AuthenticationRequest request);
    }
}
