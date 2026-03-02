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
using WpfMunkaugyEF.mvvm.view;
using WpfMunkaugyEF.mvvm.viewmodel;

namespace WpfMunkaugyEF
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
            DolgozoView dolgozok=new DolgozoView { DataContext=vm};
            dolgozok.ShowDialog();
        }

        private void menuitemReszlegek_Click(object sender, RoutedEventArgs e)
        {

        }

        private void menuitemAllomany_Click(object sender, RoutedEventArgs e)
        {

        }
    }
}