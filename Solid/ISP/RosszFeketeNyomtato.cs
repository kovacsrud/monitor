using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ISP
{
    public class RosszFeketeNyomtato : IMultiPrinter
    {
        public void FeketeFeherNyomtatas()
        {
            Console.WriteLine("Fekete nyomtatás");
        }

        public void SzinesNyomtatas()
        {
            Console.WriteLine("Szines nyomtatas");
        }

        public void Szkenneles()
        {
            Console.WriteLine("Szennelés");
        }
    }
}
