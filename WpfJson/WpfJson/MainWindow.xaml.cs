using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace WpfJson
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private string apiKey = "ec5f5e5540a6fa9e1bbe6d2cb42fcdb2e9f14e78ba6214bc4b08973142bf5190";
        JObject jsonData;
        JsonSerializer serializer;

        public MainWindow()
        {
            InitializeComponent();
            serializer = new JsonSerializer();

            
            getData("2.16.64.3");
            
            //hasznos lehet később!
            //dynamic item = serializer.Deserialize(jsonData);
            putToPanel("cityName");
            putToPanel("countryName");
            putToPanel("latitude");
            putToPanel("longitude");
            var city = jsonData["cityName"];
            Debug.WriteLine(city);
        }

        public void getData(string ip)
        {
            jsonData = JObject.Parse(new WebClient().DownloadString($"http://api.ipinfodb.com/v3/ip-city/?key={apiKey}&ip={ip}&format=json"));

            Debug.WriteLine(jsonData.ToString());
            

        }
        public void putToPanel(string jsonField)
        {
            Label label = new Label();
            label.FontSize = 18;
            label.Content = jsonData[$"{jsonField}"];
            dataStack.Children.Add(label);
        }
    }
}
//free ipinfodb apikey
//ec5f5e5540a6fa9e1bbe6d2cb42fcdb2e9f14e78ba6214bc4b08973142bf5190