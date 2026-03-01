using System;
using System.Collections.Generic;

namespace WpfDolgozokEF.mvvm.model;

public partial class Nyilvantarta
{
    public int Id { get; set; }

    public int DolgozoId { get; set; }

    public int ReszlegId { get; set; }

    public DateOnly MunkaviszonyKezdetenekDatuma { get; set; }

    public int AktivDolgozo { get; set; }

    public virtual Dolgozo Dolgozo { get; set; } = null!;

    public virtual Reszleg Reszleg { get; set; } = null!;
}
