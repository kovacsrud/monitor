using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LSP
{
    public class JoSas : JoMadar, IRepul
    {
        public override void Eszik()
        {
            Console.WriteLine("A sas eszik.");
        }

        public void Repul()
        {
            Console.WriteLine("A sas repül.");
        }
    }
}
