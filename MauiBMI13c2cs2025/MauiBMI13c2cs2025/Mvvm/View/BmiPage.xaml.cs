using MauiBMI13c2cs2025.Mvvm.ViewModel;

namespace MauiBMI13c2cs2025.Mvvm.View;

public partial class BmiPage : ContentPage
{
	public BmiPage()
	{
		InitializeComponent();
	}

    private void buttonSzamol_Clicked(object sender, EventArgs e)
    {
		var vm = BindingContext as BmiViewModel;
		try
		{
            vm.BmiSzamol();
        }
		catch (Exception ex)
		{
			DisplayAlert("Hiba!", ex.Message, "Ok");			
		}
		
    }
}