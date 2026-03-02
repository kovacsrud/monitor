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
using Microsoft.Win32;
using PropertyChanged;
using WpfMunkaugyEF.mvvm.model;
using WpfMunkaugyEF.mvvm.viewmodel;

namespace WpfMunkaugyEF.mvvm.view
{
    /// <summary>
    /// Interaction logic for InputDolgozo.xaml
    /// </summary>
    [AddINotifyPropertyChangedInterface]
    public partial class InputDolgozo : Window
    {
        bool modosit=false;
        public DolgozoViewModel  VM { get; set; }
        public Dolgozo AktDolgozo { get; set; } = new Dolgozo();
        public InputDolgozo(DolgozoViewModel vm,bool modosit=false)
        {
            InitializeComponent();
            VM = vm;
            DataContext = this;
            this.modosit = modosit;
            if (modosit)
            {
                this.Title = "Dolgozó adatainak módosítása";
                AktDolgozo = VM.SelectedDolgozo;
            }
            
        }

        private void buttonMentes_Click(object sender, RoutedEventArgs e)
        {
            if (modosit)
            {
                VM.DbMentes();
            } else
            {
                VM.Dolgozok.Add(AktDolgozo);
                VM.DbMentes();
            }
        }

        private void buttonValaszt_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                OpenFileDialog dialog = new OpenFileDialog();
                dialog.Filter = ".jpg|*.jpg|.png|*.png";
                if (dialog.ShowDialog()==true)
                {
                    AktDolgozo.DolgozoKep = new BitmapImage(new Uri(dialog.FileName));
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);                
            }
        }
    }
}
