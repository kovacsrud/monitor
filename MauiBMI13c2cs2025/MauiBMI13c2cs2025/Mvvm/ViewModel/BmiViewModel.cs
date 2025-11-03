using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using PropertyChanged;

namespace MauiBMI13c2cs2025.Mvvm.ViewModel
{
    [AddINotifyPropertyChangedInterface]
    public class BmiViewModel
    {
        public double BmiErtek { get; set; }
        public string BmiSzoveg  => BmiErtek switch {
            <=0=>"",
            <18.5=>"sovány",
            <25=>"normál",
            <30=>"túlsúly",
            <35=>"elhúzás",
            _=>"súlyos elhízás"
        };
        public ICommand BmiSzamolCommand { get; set; }
        public double TestTomeg { get; set; } = 0;
        public double Magassag { get; set; } = 0;

        public BmiViewModel()
        {
            BmiSzamolCommand = new Command(async () => {

                await Task.Run(() =>
                {
                    BmiErtek = TestTomeg / Math.Pow(Magassag / 100, 2);
                });
               
            });
        }

        

        public void BmiSzamol()
        {
            BmiErtek = TestTomeg /Math.Pow(Magassag/100,2);
            
        }



        
    }
}
