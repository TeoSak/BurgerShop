using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BurgerShop.API.Migrations
{
    /// <inheritdoc />
    public partial class AddProducts : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "CategoryId", "Description", "ImageUrl", "IsAvailable", "Name", "Price" },
                values: new object[,]
                {
                    { 1, 1, "Classic beef burger with lettuce, tomato and sauce.", "/images/products/ClassicBurger.png", true, "Classic Burger", 3.00m },
                    { 2, 1, "Beef burger with cheddar cheese, lettuce, tomato and sauce.", "/images/products/Cheeseburger.png", true, "Cheeseburger", 1.20m },
                    { 3, 1, "Beef burger with cheddar cheese and sauce.", "/images/products/DoubleCheeseburger.png", true, "Double Cheeseburger", 2.20m },
                    { 4, 1, "Classic beef burger with lettuce, tomato and sauce.", "/images/products/Hamburger.png", true, "Hamburger", 1.00m },
                    { 5, 1, "Classic beef burger with lettuce, tomato and sauce.", "/images/products/BigTeo.png", true, "Big Teo", 5.00m },
                    { 6, 1, "Crispy chicken burger with lettuce, tomato and sauce.", "/images/products/ChickenBurger.jpg", true, "Chicken Burger", 1.10m },
                    { 7, 1, "Crispy bacon burger with lettuce, tomato and sauce.", "/images/products/CrispyBacon.png", true, "Crispy Bacon", 4.40m },
                    { 8, 1, "Crispy fish burger with lettuce, tomato and sauce.", "/images/products/FishBurger.png", true, "Fish Burger", 2.10m },
                    { 9, 1, "Crispy bacon burger with lettuce, tomato and sauce.", "/images/products/DeluxeBurger.png", true, "Deluxe Burger", 4.80m },
                    { 10, 1, "Crispy chicken burger with bacon, lettuce, tomato and sauce.", "/images/products/ChickenBacon.png", true, "Chicken Bacon", 4.30m },
                    { 11, 1, "Crispy chicken burger with bacon, lettuce, tomato and sauce.", "/images/products/DoubleChicken.jpg", true, "Double Chicken", 2.10m },
                    { 12, 1, "Crispy chicken burger with bacon, lettuce, tomato and sauce.", "/images/products/UncleTeo's.jpg", true, "Uncle Teo's", 4.00m },
                    { 13, 1, "Crispy chicken burger with bacon, lettuce, tomato and sauce.", "/images/products/UncleTeo'sSpecial.jpg", true, "Uncle Teo's Special", 4.50m },
                    { 14, 1, "Crispy chicken burger with lettuce, tomato and sauce.", "/images/products/JuniorBurger.png", true, "Junior Burger", 1.10m },
                    { 15, 2, "6 crispy chicken nuggets.", "/images/products/Nuggets6.jpg", true, "6pc Nuggets", 5.00m },
                    { 16, 2, "9 crispy chicken nuggets.", "/images/products/Nuggets9.jpg", true, "9pc Nuggets", 7.00m },
                    { 17, 2, "20 crispy chicken nuggets.", "/images/products/Nuggets20.jpg", true, "20pc Nuggets", 11.00m },
                    { 18, 3, "Crispy golden fries.", "/images/products/Fries.jpeg", true, "Small Fries", 1.00m },
                    { 19, 3, "Crispy golden fries.", "/images/products/Fries.jpeg", true, "Medium Fries", 2.00m },
                    { 20, 3, "Crispy golden fries.", "/images/products/Fries.jpeg", true, "Large Fries", 3.00m },
                    { 21, 4, "Classic Coca-Cola soft drink.", "/images/products/Cocacola.jpg", true, "Coca-Cola", 2.00m },
                    { 22, 4, "Classic Coca-Cola soft drink.", "/images/products/CocacolaZero.jpg", true, "Coca-Cola zero", 2.00m },
                    { 23, 4, "Refreshing orange soft drink.", "/images/products/Fanta.png", true, "Fanta", 2.00m },
                    { 24, 4, "Refreshing lemon-lime soft drink.", "/images/products/Sprite.png", true, "Sprite", 2.00m },
                    { 25, 4, "Filtered water.", "/images/products/Water.jpg", true, "Water", 0.50m },
                    { 26, 5, "Delicious vanilla ice cream cone.", "/images/products/VanillaCone.png", true, "Vanilla Cone", 1.00m },
                    { 27, 5, "Delicious caramel ice cream cone.", "/images/products/IceCaramel.png", true, "Ice Caramel", 1.40m },
                    { 28, 5, "Delicious strawberry ice cream cone.", "/images/products/IceStrawberry.png", true, "Ice Strawberry", 1.40m },
                    { 29, 5, "Delicious chocolate ice cream cone.", "/images/products/IceChocolate.png", true, "Ice Chocolate", 1.40m },
                    { 30, 5, "Delicious golden ice cream cone.", "/images/products/IceGolden.jpg", true, "Ice Golden", 2.00m },
                    { 31, 5, "Delicious vanilla milkshake.", "/images/products/VanillaMilkshake.jpg", true, "Vanilla Milkshake", 2.20m },
                    { 32, 5, "Delicious chocolate milkshake.", "/images/products/ChocolateMilkshake.jpg", true, "Chocolate Milkshake", 2.20m }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 20);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 21);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 22);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 23);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 24);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 25);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 26);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 27);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 28);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 29);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 30);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 31);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 32);
        }
    }
}
