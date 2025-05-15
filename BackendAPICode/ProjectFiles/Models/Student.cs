using System.ComponentModel.DataAnnotations;

namespace MovieRatingAppBackEnd.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public DateTime DOB { get; set; }

        //public virtual ICollection<Enrollment> Enrollments { get; set; }
    }
}
