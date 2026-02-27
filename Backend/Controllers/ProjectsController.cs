
using Microsoft.AspNetCore.Mvc;
using PortfolioAPI.Data;
using PortfolioAPI.Models;
using System.Linq;

namespace PortfolioAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProjectsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetProjects()
        {
            return Ok(_context.Projects.ToList());
        }

        [HttpPost]
        public IActionResult AddProject(Project project)
        {
            _context.Projects.Add(project);
            _context.SaveChanges();
            return Ok(project);
        }
    }
}
