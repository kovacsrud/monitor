using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Solid
{
    public class UserRepository
    {
        public void DbUserMentes(UserAdat user)
        {
            Console.WriteLine("User adat mentése");
        }

        public void DbUjUser(UserAdat user)
        {
            Console.WriteLine("Új user felvitele");
        }
    }
}
