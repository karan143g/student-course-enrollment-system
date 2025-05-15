using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MovieRatingAppBackEnd.Models;

namespace MovieRatingAppBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        //private readonly AppDbContext _studentDbContext;

        //public StudentController(AppDbContext studentDbContext)
        //{
        //    _studentDbContext = studentDbContext;
        //}

        //[HttpGet]
        //[Route("GetStudent")]
        //public async Task<IEnumerable<Student>> GetStudents()
        //{
        //    return await _studentDbContext.Student.ToListAsync();
        //}

        //[HttpPost]
        //[Route("AddStudent")]
        //public async Task<Student> AddStudent(Student student)
        //{
        //    _studentDbContext.Student.Add(student);
        //    await _studentDbContext.SaveChangesAsync();
        //    return student;
        //}

        //[HttpPatch]
        //[Route("UpdateStudent/{id}")]
        //public async Task<Student> UpdateStudent(Student student)
        //{
        //    _studentDbContext.Entry(student).State = EntityState.Modified;
        //    await _studentDbContext.SaveChangesAsync();
        //    return student;
        //}

        //[HttpDelete]
        //[Route("DeleteStudent/{id}")]
        //public bool DeleteStudent(int id) 
        //{
        //    bool a = false;
        //    var student = _studentDbContext.Student.Find(id);
        //    if (student != null)
        //    {
        //        a = true;
        //        _studentDbContext.Entry(student).State = EntityState.Deleted;
        //        _studentDbContext.SaveChanges();
        //    }
        //    else
        //    {
        //        a = false;
        //    }
        //    return a; 
        //}
        private readonly AppDbContext _context;

        public StudentController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Student>>> GetStudents()
        {
            return await _context.Students.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Student>> GetStudent(int id)
        {
            var student = await _context.Students.FindAsync(id);
            if (student == null) return NotFound();
            return student;
        }

        [HttpPost]
        public async Task<ActionResult<Student>> CreateStudent(Student student)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Students.Add(student);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetStudent), new { id = student.Id }, student);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateStudent(int id, Student student)
        {
            if (id != student.Id) return BadRequest();

            _context.Entry(student).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudent(int id)
        {
            var student = await _context.Students.FindAsync(id);
            if (student == null) return NotFound();

            _context.Students.Remove(student);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
