﻿using System.Data.Entity;

namespace AgathaChristieFanPage.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext() : base("ApplicationDbContext")
        {
            base.Configuration.ProxyCreationEnabled = false;
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

        public DbSet<ImageModel> Images { get; set; }
        public DbSet<NovelModel> Novels { get; set; }
    }
}