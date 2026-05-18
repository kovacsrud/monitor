using Microsoft.Win32;
using System.IO;
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
using WpfJson.model;

namespace WpfJson
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        //string[] kepek;
        public FileList FileList { get; set; } 
        string jsonFajl = "files.json";
        public MainWindow()
        {
            InitializeComponent();
            FileList = new FileList();
            
            if (File.Exists(jsonFajl))
            {
                FileList=JsonTools.JsonToList(jsonFajl);
            }

            listboxFajlok.DataContext = FileList;

        }

        private void buttonTallozas_Click(object sender, RoutedEventArgs e)
        {
            OpenFileDialog dialog = new OpenFileDialog();
            dialog.Filter = ".png|*.png|.jpg|*.jpg|minden fájl|*.*";
            dialog.Multiselect = true;
            if (dialog.ShowDialog()==true)
            {
                //listboxFajlok.ItemsSource = dialog.FileNames;
                //kepek= dialog.FileNames;
                //imageKep.Source = new BitmapImage(new Uri(kepek.First()));
                FileList.SetFileList(dialog.FileNames, '\\');
                listboxFajlok.SelectedIndex = 0;
            }
        }

        private void listboxFajlok_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            //imageKep.Source = new BitmapImage(new Uri(listboxFajlok.SelectedItem.ToString()));
            if (listboxFajlok.SelectedItem!=null)
            {
                var selected = (FileItem)listboxFajlok.SelectedItem;
                imageKep.Source= new BitmapImage(new Uri(selected.FullPath));
            }
            
        }

        private void Window_Closing(object sender, System.ComponentModel.CancelEventArgs e)
        {
            try
            {
                JsonTools.ListToJson(jsonFajl, FileList);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);                
            }
            
        }
    }
}