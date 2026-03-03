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
using WpfMunkaugyEF.mvvm.viewmodel;

namespace WpfMunkaugyEF.mvvm.view
{
    /// <summary>
    /// Interaction logic for NyilvantartasView.xaml
    /// </summary>
    public partial class NyilvantartasView : Window
    {
        public NyilvantartasView()
        {
            InitializeComponent();
        }

        private void buttonUj_Click(object sender, RoutedEventArgs e)
        {
            var vm = DataContext as DolgozoViewModel;
            InputNyilvantartas inputNyilvantartas = new InputNyilvantartas(vm);
            inputNyilvantartas.ShowDialog();
        }

        private void DataGrid_MouseDoubleClick(object sender, MouseButtonEventArgs e)
        {
            var vm = DataContext as DolgozoViewModel;
            InputNyilvantartas inputNyilvantartas = new InputNyilvantartas(vm,true);
            inputNyilvantartas.ShowDialog();
        }
    }
}
