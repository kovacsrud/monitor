using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Solid
{
    public class User
    {
        public string Nev { get; set; }
        public int Eletkor { get; set; }

        public void DbMentes()
        {
            Console.WriteLine("Mentés az adatbázisba");
        }

        public void DbUjadat(string nev,int Eletkor)
        {
            Console.WriteLine("Új adat felvitele az adatbázisba");
        }
    }
}
