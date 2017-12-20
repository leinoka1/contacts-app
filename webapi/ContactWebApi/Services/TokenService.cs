using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using ContactWebApi.Controllers;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ContactWebApi.Models;
using Microsoft.Rest;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ContactWebApi.Services
{
    public class TokenService : ITokenService
    {
        public async Task<AccessToken> RequestAccessToken(AuthenticationRequest authenticationRequest)
        {
            AccessToken token = null;
            var requestParams = new List<KeyValuePair<string, string>>
            {
                new KeyValuePair<string, string>("client_id", "2c13503c-4a4b-4fa4-a9dd-f279189f65c5"),
                new KeyValuePair<string, string>("resource", "2c13503c-4a4b-4fa4-a9dd-f279189f65c5"),
                new KeyValuePair<string, string>("username", authenticationRequest.UserName),
                new KeyValuePair<string, string>("password", authenticationRequest.Password),
                new KeyValuePair<string, string>("grant_type", "password"),
                new KeyValuePair<string, string>("client_secret", "ZlZWngkvPIRZFGHjjDXRwVGmwpZ7xGnIZcsdyaSCCXU=")
            };
            string endpoint = "https://login.windows.net/6ec2c72d-4603-4299-82de-e8b6751f000a/oauth2/token";
            
            using (var httpClient = new HttpClient())
            {
                httpClient.DefaultRequestHeaders.Add("Cache-Control", "no-cache");
                HttpContent content = new FormUrlEncodedContent(requestParams);
                var response = await httpClient.PostAsync(endpoint, content);

                if (response.IsSuccessStatusCode)
                {
                    var data = await response.Content.ReadAsStringAsync();
                    token = JsonConvert.DeserializeObject<AccessToken>(data);
                }
               // else
               // {
               //     throw new Exception("Requesting Azure AD access token failed. response=" + response);
               // }
            }
            return token;
        }
        
    }
}