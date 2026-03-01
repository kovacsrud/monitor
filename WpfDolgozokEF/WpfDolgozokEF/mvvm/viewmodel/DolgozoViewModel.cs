using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Xml.Linq;
using WpfDolgozokEF.mvvm.model;

namespace WpfDolgozokEF.mvvm.viewmodel
{
    public class DolgozoViewModel
    {
        MunkaNyilvantartasContext context;
        public ObservableCollection<Dolgozo> Dolgozok { get; set; }
        public ObservableCollection<Reszleg> Reszlegek { get; set; }
        public ObservableCollection<Nyilvantarta> Nyilvantartas { get; set; }

        public Dolgozo SelectedDolgozo { get; set; }

        public DolgozoViewModel()
        {
            context = new MunkaNyilvantartasContext();
            context.Nyilvantartas.Load();
            context.Reszlegs.Load();
            context.Dolgozos.Load();

            Dolgozok = context.Dolgozos.Local.ToObservableCollection();
            Reszlegek=context.Reszlegs.Local.ToObservableCollection();
            Nyilvantartas=context.Nyilvantartas.Local.ToObservableCollection();
        }

        public void DbMentes()
        {
            try
            {
                context.SaveChanges();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }


    }
}
