using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LSP
{
    public class RosszPingvin : RosszMadar
    {
        public override void Eszik()
        {
            Console.WriteLine("A madár eszik");
        }

        public override void Repul()
        {
            Console.WriteLine("A madár repül");
        }
    }
}
