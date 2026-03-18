using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DIP
{
    public class OracleDb : IDatabase
    {
        
        public void Mentes(string data)
        {
            Console.WriteLine("Mentés Oracle adatbázisba!");
        }
    }
}
