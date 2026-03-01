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
using WpfDolgozokEF.mvvm.viewmodel;

namespace WpfDolgozokEF.mvvm.view
{
    /// <summary>
    /// Interaction logic for DolgozokView.xaml
    /// </summary>
    public partial class DolgozokView : Window
    {
        public DolgozokView()
        {
            InitializeComponent();
        }

        private void buttonUj_Click(object sender, RoutedEventArgs e)
        {
            var vm = DataContext as DolgozoViewModel;
            InputDolgozo inputdolgozo = new InputDolgozo(vm);
            inputdolgozo.ShowDialog();
        }
    }
}
