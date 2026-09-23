using BurgerShop.API.Models;
using Microsoft.EntityFrameworkCore;
namespace BurgerShop.API.Data;
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }
//Models
    public DbSet<Category> Categories { get; set; }
    public DbSet<Product> Products { get; set; }
    public DbSet<Order> Orders { get; set; }
    public DbSet<OrderItem> OrderItems { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Category>().HasData(
    new Category { Id = 1, Name = "Burgers" },
    new Category { Id = 2, Name = "Nuggets" },
    new Category { Id = 3, Name = "Fries" },
    new Category { Id = 4, Name = "Drinks" },
    new Category { Id = 5, Name = "Desserts" }
);

        // Products
        modelBuilder.Entity<Product>().HasData(
            // Burgers
            new Product
            {
                Id = 1,
                Name = "Classic Burger",
                Description = "Classic beef burger with lettuce, tomato and sauce.",
                Price = 3.00m,
                ImageUrl = "/images/products/ClassicBurger.png",
                CategoryId = 1
            },
            new Product
            {
                Id = 2,
                Name = "Cheeseburger",
                Description = "Beef burger with cheddar cheese, lettuce, tomato and sauce.",
                Price = 1.20m,
                ImageUrl = "/images/products/Cheeseburger.png",
                CategoryId = 1
            },
            new Product
            {
                Id = 3,
                Name = "Double Cheeseburger",
                Description = "Beef burger with cheddar cheese and sauce.",
                Price = 2.20m,
                ImageUrl = "/images/products/DoubleCheeseburger.png",
                CategoryId = 1
            },
            new Product
            {
                Id = 4,
                Name = "Hamburger",
                Description = "Classic beef burger with lettuce, tomato and sauce.",
                Price = 1.00m,
                ImageUrl = "/images/products/Hamburger.png",
                CategoryId = 1
            },
            new Product
            {
                Id = 5,
                Name = "Big Teo",
                Description = "Classic beef burger with lettuce, tomato and sauce.",
                Price = 5.00m,
                ImageUrl = "/images/products/BigTeo.png",
                CategoryId = 1
            },
            new Product
            {
                Id = 6,
                Name = "Chicken Burger",
                Description = "Crispy chicken burger with lettuce, tomato and sauce.",
                Price = 1.10m,
                ImageUrl = "/images/products/ChickenBurger.jpg",
                CategoryId = 1
            },
            new Product
            {
                Id = 7,
                Name = "Crispy Bacon",
                Description = "Crispy bacon burger with lettuce, tomato and sauce.",
                Price = 4.40m,
                ImageUrl = "/images/products/CrispyBacon.png",
                CategoryId = 1
            },
            new Product
            {
                Id = 8,
                Name = "Fish Burger",
                Description = "Crispy fish burger with lettuce, tomato and sauce.",
                Price = 2.10m,
                ImageUrl = "/images/products/FishBurger.png",
                CategoryId = 1
            },
             new Product
             {
                 Id = 9,
                 Name = "Deluxe Burger",
                 Description = "Crispy bacon burger with lettuce, tomato and sauce.",
                 Price = 4.80m,
                 ImageUrl = "/images/products/DeluxeBurger.png",
                 CategoryId = 1
             },
             new Product
             {
                 Id = 10,
                 Name = "Chicken Bacon",
                 Description = "Crispy chicken burger with bacon, lettuce, tomato and sauce.",
                 Price = 4.30m,
                 ImageUrl = "/images/products/ChickenBacon.png",
                 CategoryId = 1
             },
             new Product
             {
                 Id = 11,
                 Name = "Double Chicken",
                 Description = "Crispy chicken burger with bacon, lettuce, tomato and sauce.",
                 Price = 2.10m,
                 ImageUrl = "/images/products/DoubleChicken.jpg",
                 CategoryId = 1
             },
             new Product
             {
                 Id = 12,
                 Name = "Uncle Teo's",
                 Description = "Crispy chicken burger with bacon, lettuce, tomato and sauce.",
                 Price = 4.00m,
                 ImageUrl = "/images/products/UncleTeo's.jpg",
                 CategoryId = 1
             },
             new Product
             {
                 Id = 13,
                 Name = "Uncle Teo's Special",
                 Description = "Crispy chicken burger with bacon, lettuce, tomato and sauce.",
                 Price = 4.50m,
                 ImageUrl = "/images/products/UncleTeo'sSpecial.jpg",
                 CategoryId = 1
             },
             new Product
             {
                 Id = 14,
                 Name = "Junior Burger",
                 Description = "Crispy chicken burger with lettuce, tomato and sauce.",
                 Price = 1.10m,
                 ImageUrl = "/images/products/JuniorBurger.png",
                 CategoryId = 1
             },
        // Nuggets
        new Product
        {
            Id = 15 ,
            Name = "6pc Nuggets",
            Description = "6 crispy chicken nuggets.",
            Price = 5.00m,
            ImageUrl = "/images/products/Nuggets6.jpg",
            CategoryId = 2
        },
        new Product
        {
            Id = 16,
            Name = "9pc Nuggets",
            Description = "9 crispy chicken nuggets.",
            Price = 7.00m,
            ImageUrl = "/images/products/Nuggets9.jpg",
            CategoryId = 2
        },
        new Product
        {
            Id = 17,
            Name = "20pc Nuggets",
            Description = "20 crispy chicken nuggets.",
            Price = 11.00m,
            ImageUrl = "/images/products/Nuggets20.jpg",
            CategoryId = 2
        },
        // Fries
        new Product
        {
            Id = 18,
            Name = "Small Fries",
            Description = "Crispy golden fries.",
            Price = 1.00m,
            ImageUrl = "/images/products/Fries.jpeg",
            CategoryId = 3
        },
        new Product
        {
            Id = 19,
            Name = "Medium Fries",
            Description = "Crispy golden fries.",
            Price = 2.00m,
            ImageUrl = "/images/products/Fries.jpeg",
            CategoryId = 3
        },
        new Product
        {
            Id = 20,
            Name = "Large Fries",
            Description = "Crispy golden fries.",
            Price = 3.00m,
            ImageUrl = "/images/products/Fries.jpeg",
            CategoryId = 3
        },
        // Drinks
        new Product
        {
            Id = 21,
            Name = "Coca-Cola",
            Description = "Classic Coca-Cola soft drink.",
            Price = 2.00m,
            ImageUrl = "/images/products/Cocacola.jpg",
            CategoryId = 4
        },
        new Product
        {
            Id = 22,
            Name = "Coca-Cola zero",
            Description = "Classic Coca-Cola soft drink.",
            Price = 2.00m,
            ImageUrl = "/images/products/CocacolaZero.jpg",
            CategoryId = 4
        },
        new Product
        {
            Id = 23,
            Name = "Fanta",
            Description = "Refreshing orange soft drink.",
            Price = 2.00m,
            ImageUrl = "/images/products/Fanta.png",
            CategoryId = 4
        },
        new Product
        {
            Id = 24,
            Name = "Sprite",
            Description = "Refreshing lemon-lime soft drink.",
            Price = 2.00m,
            ImageUrl = "/images/products/Sprite.png",
            CategoryId = 4
        },
        new Product
        {
            Id = 25,
            Name = "Water",
            Description = "Filtered water.",
            Price = 0.50m,
            ImageUrl = "/images/products/Water.jpg",
            CategoryId = 4
        },
        // Desserts
        new Product
        {
            Id = 26,
            Name = "Vanilla Cone",
            Description = "Delicious vanilla ice cream cone.",
            Price = 1.00m,
            ImageUrl = "/images/products/VanillaCone.png",
            CategoryId = 5
        },
        new Product
        {
            Id = 27,
            Name = "Ice Caramel",
            Description = "Delicious caramel ice cream cone.",
            Price = 1.40m,
            ImageUrl = "/images/products/IceCaramel.png",
            CategoryId = 5
        }, new Product
        {
            Id = 28,
            Name = "Ice Strawberry",
            Description = "Delicious strawberry ice cream cone.",
            Price = 1.40m,
            ImageUrl = "/images/products/IceStrawberry.png",
            CategoryId = 5
        },
         new Product
         {
             Id = 29,
             Name = "Ice Chocolate",
             Description = "Delicious chocolate ice cream cone.",
             Price = 1.40m,
             ImageUrl = "/images/products/IceChocolate.png",
             CategoryId = 5
         },
          new Product
          {
              Id = 30,
              Name = "Ice Golden",
              Description = "Delicious golden ice cream cone.",
              Price = 2.00m,
              ImageUrl = "/images/products/IceGolden.jpg",
              CategoryId = 5
          },
          new Product
          {
            Id = 31,
            Name = "Vanilla Milkshake",
            Description = "Delicious vanilla milkshake.",
            Price = 2.20m,
            ImageUrl = "/images/products/VanillaMilkshake.jpg",
            CategoryId = 5
        },
          new Product
          {
              Id = 32,
              Name = "Chocolate Milkshake",
              Description = "Delicious chocolate milkshake.",
              Price = 2.20m,
              ImageUrl = "/images/products/ChocolateMilkshake.jpg",
              CategoryId = 5
          }
        );
    }
};