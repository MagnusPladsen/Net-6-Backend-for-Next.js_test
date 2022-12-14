using Microsoft.AspNetCore.Mvc;
using net60_react.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddSingleton<TicketsRepository, InMemTicketsRepository>();
builder.Services.AddSingleton<EventsRepository, InMemEventsRepository>();
builder.Services.AddSingleton<OrdersRepository, InMemOrdersRepository>();
builder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>
    {
        builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
    }));


var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}
app.UseCors("corsapp");
app.UseHttpsRedirection();
app.UseAuthorization();
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("/order/edit", "/order/edit.html");
app.MapFallbackToFile("/order/summary", "/order/summary.html");
app.MapFallbackToFile("/order/tickets{id}", "/order/tickets/[id].html");
app.MapFallbackToFile("landingPage.html");
app.MapFallbackToFile("index.html");

app.Run();
