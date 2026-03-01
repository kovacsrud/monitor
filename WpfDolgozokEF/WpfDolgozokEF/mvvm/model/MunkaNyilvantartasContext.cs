using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace WpfDolgozokEF.mvvm.model;

public partial class MunkaNyilvantartasContext : DbContext
{
    public MunkaNyilvantartasContext()
    {
    }

    public MunkaNyilvantartasContext(DbContextOptions<MunkaNyilvantartasContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Dolgozo> Dolgozos { get; set; }

    public virtual DbSet<Nyilvantarta> Nyilvantartas { get; set; }

    public virtual DbSet<Reszleg> Reszlegs { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)

        => optionsBuilder.UseSqlite("Data Source=D:\\c#_uj_projektek\\WpfDolgozokEF\\WpfDolgozokEF\\database\\munka_nyilvantartas.db");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Dolgozo>(entity =>
        {
            entity.ToTable("Dolgozo");

            entity.Property(e => e.DolgozoFoto).HasColumnName("Dolgozo_Foto");
            entity.Property(e => e.SzuletesiDatum).HasColumnName("Szuletesi_Datum");
        });

        modelBuilder.Entity<Nyilvantarta>(entity =>
        {
            entity.Property(e => e.MunkaviszonyKezdetenekDatuma).HasColumnName("Munkaviszony_kezdetenek_Datuma");

            entity.HasOne(d => d.Dolgozo).WithMany(p => p.Nyilvantarta)
                .HasForeignKey(d => d.DolgozoId)
                .OnDelete(DeleteBehavior.ClientSetNull);

            entity.HasOne(d => d.Reszleg).WithMany(p => p.Nyilvantarta)
                .HasForeignKey(d => d.ReszlegId)
                .OnDelete(DeleteBehavior.ClientSetNull);
        });

        modelBuilder.Entity<Reszleg>(entity =>
        {
            entity.ToTable("Reszleg");

            entity.HasIndex(e => e.ReszlegNeve, "IX_Reszleg_Reszleg_neve").IsUnique();

            entity.Property(e => e.ReszlegNeve).HasColumnName("Reszleg_neve");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
