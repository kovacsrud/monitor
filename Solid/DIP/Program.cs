namespace DIP
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Dependency Inversion Principle (Függőség megfordítás elve)");

            //A magas szintű modulok ne függjenek alacsony szintű moduloktól.Mindkettő absztrakcióktól függjön.

            var userService = new JoUserService(new OracleDb());

            userService.UserMentes("Béla");
        }
    }
}
