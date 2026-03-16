using System;
using System.Collections.Generic;

namespace WpfMunkaugyEF.mvvm.model;

public partial class Reszleg
{
    public int Id { get; set; }

    public string ReszlegNeve { get; set; } = null!;

    public virtual ICollection<Nyilvantarta> Nyilvantarta { get; set; } = new List<Nyilvantarta>();
}
