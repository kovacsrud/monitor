using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OCP
{
    public class BadKosarKalkulator
    {
        public double ArSzamitas(string vevoTipus,double ar)
        {
            if (vevoTipus == "uj")
            {
                return ar * 0.9;
            } else if(vevoTipus == "regi")
            {
                return ar * 0.7;
            }
            return ar;
        }
    }
}
