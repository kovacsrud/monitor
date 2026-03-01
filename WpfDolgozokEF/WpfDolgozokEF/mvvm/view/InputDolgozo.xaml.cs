using Microsoft.Win32;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;
using WpfDolgozokEF.mvvm.model;
using WpfDolgozokEF.mvvm.viewmodel;
using PropertyChanged;

namespace WpfDolgozokEF.mvvm.view
{
    /// <summary>
    /// Interaction logic for InputDolgozo.xaml
    /// </summary>
    [AddINotifyPropertyChangedInterface]
    public partial class InputDolgozo : Window
    {
        bool modosit = false;
        public DolgozoViewModel VM { get; set; }
        public Dolgozo AktDolgozo { get; set; } = new Dolgozo();
        public InputDolgozo(DolgozoViewModel vm,bool modosit=false)
        {
            InitializeComponent();
            DataContext = this;
            VM= vm;
            if (modosit)
            {
                AktDolgozo = VM.SelectedDolgozo;
            }
        }

        private void buttonValaszt_Click(object sender, RoutedEventArgs e)
        {
            OpenFileDialog dialog=new OpenFileDialog();
            dialog.Filter = ".jpg|*.jpg|.png|*.png";
            
            if (dialog.ShowDialog()==true)
            {
                AktDolgozo.DolgozoKep = new BitmapImage(new Uri(dialog.FileName));
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
    }
}
