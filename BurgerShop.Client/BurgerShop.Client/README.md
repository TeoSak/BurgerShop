# BurgerShop Client

React frontend for the BurgerShop full-stack ordering application.

The client provides the customer ordering interface as well as the cashier interface for viewing and managing orders.

## Tech Stack

* React
* Vite
* JavaScript
* Tailwind CSS
* React Router
* Fetch API
* Lucide React
* Context API
* Local Storage

## Features

### Customer

* Responsive home page
* Product menu
* Category navigation
* Product cards
* Add to cart functionality
* Cart quantity management
* Remove products from cart
* Persistent cart using Local Storage
* Checkout
* Order creation through the REST API
* Order confirmation page
* Responsive mobile layout

### Cashier

* Cashier dashboard
* Orders sorted by newest first
* Order details
* Order totals
* Order item information
* Order status management
* Sequential order status updates
* Visual status indicators
* Completed orders visually separated from active orders

## Project Structure

```text
BurgerShop.Client/
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── ...
│   │
│   ├── context/
│   │   └── CartContext.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Menu.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── OrderConfirmation.jsx
│   │   ├── CashierDashboard.jsx
│   │   └── CashierOrderDetails.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── package.json
└── vite.config.js
```

## Application Flow

### Customer flow

```text
Home
 ↓
Menu
 ↓
Add products
 ↓
Cart
 ↓
Checkout
 ↓
Create Order
 ↓
Order Confirmation
```

### Cashier flow

```text
Cashier Dashboard
       ↓
Order Details
       ↓
Update Status
       ↓
Paid
       ↓
Preparing
       ↓
Ready
       ↓
Completed
```

## Cart

The shopping cart is managed using React Context API.

Cart data is persisted in Local Storage, allowing the cart to remain available after refreshing the browser.

The cart supports:

* Adding products
* Increasing quantity
* Decreasing quantity
* Removing products
* Clearing the cart
* Calculating the total price
* Calculating the total item count

## API Integration

The client communicates with the ASP.NET Core backend using the API base URL stored in an environment variable.

Example:

```env
VITE_API_URL=http://localhost:7000
```

API requests use:

```text
${VITE_API_URL}/api/...
```

Product images use:

```text
${VITE_API_URL}/images/...
```

For production, the environment variable should contain the public URL of the deployed API.

## Running Locally

### Requirements

* Node.js
* npm
* Git

Install dependencies:

```bash
npm install
```

Create a local `.env` file:

```env
VITE_API_URL=http://localhost:7000
```

Start the development server:

```bash
npm run dev
```

Build the application:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Responsive Design

The application was designed for both desktop and mobile devices.

The menu provides:

* Desktop category sidebar
* Desktop multi-column product grid
* Mobile category navigation
* Mobile two-column product layout

The customer interface and cashier dashboard adapt to different screen sizes using Tailwind CSS responsive utilities.

## Environment Variables

The frontend uses Vite environment variables.

Local `.env` files containing configuration should not be committed if they contain sensitive or environment-specific information.

For production deployments, environment variables should be configured through the hosting provider.

## Future Improvements

Possible future additions include:

* Customer authentication
* Customer order history
* Payment integration
* Product search
* Product filtering
* Admin product management
* Order notifications
* Improved cashier filtering
* Automated frontend tests

