using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using WpfDolgozokEF.mvvm.view;
using WpfDolgozokEF.mvvm.viewmodel;

namespace WpfDolgozokEF
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            DataContext = new DolgozoViewModel();
        }

        private void menuitemDolgozok_Click(object sender, RoutedEventArgs e)
        {
            var vm=DataContext as DolgozoViewModel;
            DolgozokView dolgozok=new DolgozokView { DataContext = vm };
            dolgozok.ShowDialog();
        }

        private void menuitemReszlegek_Click(object sender, RoutedEventArgs e)
        {

        }

        private void menuitemNyilvantartas_Click(object sender, RoutedEventArgs e)
        {

        }
    }
}