using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ISP
{
    public class JoMultiNyomtato : IFeketeNyomtatas, ISzinesNyomtatas, ISzkenneles
    {
        public void FeketeFeherNyomtatas()
        {
            Console.WriteLine("Fekete nyomtatás");
        }

        public void SzinesNyomtatas()
        {
            Console.WriteLine("Színes nyomtatás");
        }

        public void Szkenneles()
        {
            Console.WriteLine("Szkennelés");
        }
    }
}
