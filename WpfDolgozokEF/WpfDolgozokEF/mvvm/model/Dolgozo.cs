using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.IO;
using System.Windows.Controls;
using System.Windows.Media.Imaging;
using PropertyChanged;

namespace WpfDolgozokEF.mvvm.model;
[AddINotifyPropertyChangedInterface]

public partial class Dolgozo
{
    public int Id { get; set; }

    public string Nev { get; set; } = null!;

    public DateOnly SzuletesiDatum { get; set; }

    public string AnyjaNeve { get; set; } = null!;

    
    public byte[]? DolgozoFoto {
        get;set;
      
    }


    [NotMapped]
    public BitmapImage? DolgozoKep {
        get
        {
            if (DolgozoFoto == null || DolgozoFoto.Length == 0)
                return null;

            using (MemoryStream ms = new MemoryStream(DolgozoFoto))
            {
                BitmapImage image = new BitmapImage();
                image.BeginInit();
                image.CacheOption = BitmapCacheOption.OnLoad;
                image.StreamSource = ms;
                image.EndInit();
                image.Freeze();
                return image;
            }
        }
        set
        {
            if (value == null)
            {
                DolgozoFoto = null;
                return;
            }

            using (MemoryStream ms = new MemoryStream())
            {
                BitmapEncoder encoder = new PngBitmapEncoder();
                encoder.Frames.Add(BitmapFrame.Create(value));
                encoder.Save(ms);
                DolgozoFoto = ms.ToArray();
            }
        }
    }

    public virtual ICollection<Nyilvantarta> Nyilvantarta { get; set; } = new List<Nyilvantarta>();

   
}
