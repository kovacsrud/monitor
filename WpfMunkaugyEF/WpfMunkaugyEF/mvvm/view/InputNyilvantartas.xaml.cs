using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;
using WpfMunkaugyEF.mvvm.model;
using WpfMunkaugyEF.mvvm.viewmodel;
using PropertyChanged;

namespace WpfMunkaugyEF.mvvm.view
{
    /// <summary>
    /// Interaction logic for InputNyilvantartas.xaml
    /// </summary>
    [AddINotifyPropertyChangedInterface]
    public partial class InputNyilvantartas : Window
    {
        bool modosit = false;
        public DolgozoViewModel VM { get; set; }
        public Nyilvantarta AktNyilvantartas { get; set; }= new Nyilvantarta { AktivDolgozo=0 };
        public InputNyilvantartas(DolgozoViewModel vm,bool modosit=false)
        {
            InitializeComponent();
            this.modosit = modosit;
            VM = vm;
            DataContext = this;

            this.Title = "Új dolgozó felvétele";
            if (modosit)
            {
                this.Title = "Nyilvántartás módosítása";
                AktNyilvantartas = VM.SelectedNyilvantartas;
            }
        }

        private void buttonMentes_Click(object sender, RoutedEventArgs e)
        {
            if (modosit)
            {
                VM.DbMentes();

            } else
            {
                VM.Nyilvantartas.Add(AktNyilvantartas);
                VM.DbMentes();
            }
            
        }
    }
}
