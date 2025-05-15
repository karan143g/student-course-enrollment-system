using Microsoft.EntityFrameworkCore;

namespace MovieRatingAppBackEnd.Models
{
    public class AppDbContext: DbContext
    {
        //public AppDbContext (DbContextOptions<AppDbContext>options) : base(options)
        //{
        //}
        //public DbSet<Student> Student {  get; set; }
      

        public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=KARAN_G\\SQLEXPRESS; Initial Catalog=MovieApp; User Id=sa; password=Ragnar#10; TrustServerCertificate= True");
        }

        public DbSet<Student> Students { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<Enrollment> Enrollments { get; set; }

       
    }
}
