using MauiBMI13c2cs2025.Mvvm.ViewModel;

namespace MauiBMI13c2cs2025.Mvvm.View;

public partial class StartPage : ContentPage
{
	public StartPage()
	{
		InitializeComponent();
	}

    private void buttonTovabb_Clicked(object sender, EventArgs e)
    {
		Navigation.PushAsync(new BmiPage { BindingContext=new BmiViewModel() });
    }
}