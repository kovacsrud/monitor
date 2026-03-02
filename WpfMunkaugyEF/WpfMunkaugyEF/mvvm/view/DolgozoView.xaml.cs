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
    /// Interaction logic for DolgozoView.xaml
    /// </summary>
    public partial class DolgozoView : Window
    {
        public DolgozoView()
        {
            InitializeComponent();
        }

        private void buttonUj_Click(object sender, RoutedEventArgs e)
        {
            var vm = DataContext as DolgozoViewModel;
            InputDolgozo inputDolgozo = new InputDolgozo(vm);
            inputDolgozo.ShowDialog();
        }
               

        private void DataGrid_MouseDoubleClick(object sender, MouseButtonEventArgs e)
        {
            var vm = DataContext as DolgozoViewModel;
            InputDolgozo inputDolgozo = new InputDolgozo(vm, true);
            inputDolgozo.ShowDialog();
        }

        private void buttonTorol_Click(object sender, RoutedEventArgs e)
        {
            var vm = DataContext as DolgozoViewModel;
            var valasz = MessageBox.Show("Biztosan törli?", "Törlés", MessageBoxButton.OKCancel, MessageBoxImage.Question);
            if (valasz==MessageBoxResult.OK)
            {
                vm.Dolgozok.Remove(vm.SelectedDolgozo);
                vm.DbMentes();
            }
        }
    }
}
