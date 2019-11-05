using api.Core;
using api.Cv;
using api.Footer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace api
{
    public class Startup
    {
        public Startup(IConfiguration configuration) =>
            Configuration = configuration;

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();

            services.AddOptions();
            services.Configure<DataConfig>(Configuration.GetSection(nameof(DataConfig)));

            services.AddTransient<IDataService, DataService>();
            services.AddTransient<ICvService, CvService>();
            services.AddTransient<IFooterService, FooterService>();
            services.AddTransient<IVersionService, VersionService>();

            services.AddControllers();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors(builder => builder.AllowAnyOrigin());

            if (env.IsDevelopment())
                app.UseDeveloperExceptionPage();
            else
                app.UseHsts();

            //app.UseHttpsRedirection(); // wkhmltopdf can't follow HTTP 307
            app.UseRouting();
            app.UseEndpoints(endpoints => endpoints.MapControllers());
        }
    }
}
