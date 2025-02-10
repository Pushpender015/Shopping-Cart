# Shopping Cart Application

This is a simple shopping cart application built with React, Redux, and Tailwind CSS. The application allows users to browse products, add them to the cart, and view the cart summary.

## Table of Contents

- Features
- Project Structure
- Installation
- Usage
- Dependencies
- Scripts
- License

## Features

- Browse products from a fake store API
- Add products to the cart
- Remove products from the cart
- View cart summary with total items and total amount
- Responsive design using Tailwind CSS
- Toast notifications for adding/removing items from the cart

## Project Structure

```
.gitignore
package.json
postcss.config.js
public/
  android-chrome-192x192.png
  android-chrome-512x512.png
  apple-touch-icon.png
  favicon-16x16.png
  favicon-32x32.png
  favicon.ico
  index.html
  logo.png
  site.webmanifest
src/
  App.jsx
  components/
    CartItem.jsx
    Navbar.jsx
    Product.jsx
    Spinner.css
    Spinner.jsx
  data.js
  index.css
  index.js
  pages/
    Cart.jsx
    Home.jsx
  redux/
    Slices/
      CartSlice.js
    Store.js
tailwind.config.js
```

### Explanation of Key Files

- index.js: Entry point of the application. Sets up the React application with Redux and React Router.
- App.jsx: Main application component that defines the routes and includes the `Navbar`.
- components: Contains reusable components like `CartItem`, `Navbar`, `Product`, and `Spinner`.
- pages: Contains page components like `Cart` and `Home`.
- redux: Contains Redux setup with slices and store configuration.
- data.js: Contains a list of products used in the application.
- index.html: HTML template for the application.
- tailwind.config.js: Configuration file for Tailwind CSS.

## Installation

1. Clone the repository:

```sh
git clone https://github.com/your-username/shopping-cart.git
cd shopping-cart
```

2. Install dependencies:

```sh
npm install
```

## Usage

1. Start the development server:

```sh
npm start
```

2. Open your browser and navigate to `http://localhost:3000`.

## Dependencies

- `react`: JavaScript library for building user interfaces.
- `react-dom`: Entry point to the DOM and server renderers for React.
- `react-redux`: Official React bindings for Redux.
- `redux`: Predictable state container for JavaScript apps.
- `@reduxjs/toolkit`: The official, recommended way to write Redux logic.
- `react-router-dom`: Declarative routing for React.
- `react-hot-toast`: React component for displaying toast notifications.
- `tailwindcss`: Utility-first CSS framework for rapid UI development.

## Scripts

- `start`: Starts the development server.
- `build`: Builds the application for production.
- `test`: Runs the test suite.
- `eject`: Ejects the Create React App configuration.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---
