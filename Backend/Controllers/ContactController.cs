
using Microsoft.AspNetCore.Mvc;
using PortfolioAPI.Data;
using PortfolioAPI.Models;

namespace PortfolioAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ContactController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult SendMessage(ContactMessage message)
        {
            _context.ContactMessages.Add(message);
            _context.SaveChanges();
            return Ok("Message Saved Successfully");
        }
    }
}
