using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactWebApi.Config;
using ContactWebApi.Repositories;
using ContactWebApi.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace ContactWebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ContactsDbContext>(options =>
            {
                options.UseSqlServer(Configuration["ConnectonStringAzure"]);
            });

            services.AddScoped<IContactService, ContactService>();
            services.AddScoped<IContactRepository, ContactRepository>();
            services.AddScoped<ITokenService, TokenService>();
            // This is an optionally configuration
            // services.Configure<AzureSettings>(Configuration.GetSection("AzureSettings"));
            services.AddCors(o => o.AddPolicy("ContactsAppPolicy", builder =>
            {
                builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
            }));
            services.AddAuthentication(options =>
                {
                    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                })
                .AddJwtBearer(options =>
                {

                    //options.Audience = "<applicationId>";
                    //options.Authority = "<loginUrl>" + "<directoryId>";
                    options.Audience = "2c13503c-4a4b-4fa4-a9dd-f279189f65c5";
                    options.Authority = "https://login.windows.net/" + "6ec2c72d-4603-4299-82de-e8b6751f000a";
                });
            services.AddMvc();

            //// Configure database
            //services.AddDbContext<ContactsDbContext>(options =>
            //{
            //    options.UseSqlServer(Configuration[ConnectionString]);
            //});
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            using (var serviceScope = app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetRequiredService<ContactsDbContext>();
                context.Database.EnsureCreated();
            }
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors("ContactsAppPolicy");
            app.UseAuthentication();
            app.UseMvc();
        }
    }
}
