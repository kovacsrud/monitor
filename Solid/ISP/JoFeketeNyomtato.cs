using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ISP
{
    public class JoFeketeNyomtato : IFeketeNyomtatas
    {
        public void FeketeFeherNyomtatas()
        {
            Console.WriteLine("Fekete-fehér nyomtatás");
        }
    }
}
