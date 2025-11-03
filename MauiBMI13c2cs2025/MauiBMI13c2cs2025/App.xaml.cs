using MauiBMI13c2cs2025.Mvvm.View;

namespace MauiBMI13c2cs2025
{
    public partial class App : Application
    {
        public App()
        {
            InitializeComponent();

            MainPage = new NavigationPage(new StartPage());
        }
    }
}
