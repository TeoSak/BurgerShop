# BurgerShop API

ASP.NET Core Web API backend for the BurgerShop full-stack ordering application.

The API manages products, categories, orders, order items, pricing and order status transitions. It provides a RESTful interface consumed by the BurgerShop React frontend.

## Tech Stack

* ASP.NET Core Web API
* C#
* Entity Framework Core
* SQL Server
* REST API
* LINQ
* Dependency Injection

## Features

* Product management
* Category management
* Order creation
* Order retrieval
* Order item management
* Automatic order total calculation
* Product availability validation
* Order status management
* Sequential order status transitions
* Entity Framework Core database integration
* CORS configuration for the frontend

## Project Structure

```text
BurgerShop.API/
├── Controllers/
│   ├── CategoriesController.cs
│   ├── OrdersController.cs
│   └── ProductsController.cs
│
├── Data/
│   └── AppDbContext.cs
│
├── DTOs/
│   └── Orders/
│       ├── CreateOrderDto.cs
│       ├── OrderResponseDto.cs
│       └── OrderItemResponseDto.cs
│
├── Models/
│   ├── Category.cs
│   ├── Product.cs
│   ├── Order.cs
│   ├── OrderItem.cs
│   └── OrderStatus.cs
│
├── wwwroot/
│   └── images/
│       └── product images
│
├── Program.cs
├── appsettings.json
└── BurgerShop.API.csproj
```

## API Endpoints

### Products

```http
GET /api/Products
GET /api/Products/{id}
POST /api/Products
```

### Categories

```http
GET /api/Categories
GET /api/Categories/{id}
```

### Orders

Get all orders:

```http
GET /api/Orders
```

Get a specific order:

```http
GET /api/Orders/{id}
```

Create an order:

```http
POST /api/Orders
```

Example request:

```json
{
  "items": [
    {
      "productId": 1,
      "quantity": 2
    },
    {
      "productId": 5,
      "quantity": 1
    }
  ]
}
```

Update an order status:

```http
PATCH /api/Orders/{id}/status
```

Example:

```json
"Paid"
```

## Order Status Flow

Orders follow a controlled status flow:

```text
PendingPayment
       ↓
     Paid
       ↓
  Preparing
       ↓
     Ready
       ↓
   Completed
```

The API validates status transitions and prevents invalid state changes.

## Running Locally

### Requirements

* .NET SDK
* SQL Server
* Visual Studio or VS Code
* Git

Clone the repository and navigate to the API project:

```bash
cd BurgerShop.API
```

Restore dependencies:

```bash
dotnet restore
```

Configure the database connection string using local configuration or environment variables.

Apply the database migrations:

```bash
dotnet ef database update
```

Run the API:

```bash
dotnet run
```

The API will then be available at the configured local address.

## Database

The application uses SQL Server with Entity Framework Core.

The main entities are:

* Category
* Product
* Order
* OrderItem

Orders contain multiple order items, while each order item references a product and stores its unit price at the time of ordering.

## Product Images

Product images are served from the API's static `wwwroot/images` directory.

Example:

```text
/images/burger.jpg
```

The frontend builds the complete image URL using the API base URL.

## Security

Sensitive configuration should never be committed to source control.

Examples include:

* Database connection strings
* Passwords
* API keys
* Authentication secrets
* Production credentials

Use environment variables or local development secrets for sensitive values.

## Future Improvements

Possible future additions include:

* Authentication and authorization
* Customer accounts
* Payment integration
* Order history
* Inventory management
* Admin product management
* Automated tests
* Swagger/OpenAPI production documentation
