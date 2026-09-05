# E-Commerce-App

E-commerce admin portal built with React, Tailwind CSS, and JSON Server.

## Table of Contents

* [Overview](#overview)
* [Features](#features)
* [Live Demo](#live-demo)
* [Local Setup](#local-setup)
* [Technologies Used](#technologies-used)
* [How It Works](#how-it-works)
* [Contact](#contact)
* [Roadmap](#roadmap)
* [License](#license)

## Overview

A React project that allows users to view, add, edit, search, and delete products through an e-commerce admin portal.

## Features

* Display a list of existing products
* Add new products using a form
* Enter a product name, price, category, and description
* Search for products by name
* Edit existing products
* Delete products

## Live Demo

Open the repository here:

https://github.com/bradleychacha-tech/E-Commerce-App

## Local Setup

### Requirements

* A modern web browser
* Node.js
* Internet access

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:bradleychacha-tech/E-Commerce-App.git
   ```

2. Navigate into the project folder:

   ```bash
   cd E-Commerce-App
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the JSON Server:

   ```bash
   npx json-server --watch db.json --port 6001
   ```

5. Open another terminal and start the development server:

   ```bash
   npm run dev
   ```

6. Open the app in your browser:

   ```text
   http://127.0.0.1:5173/
   ```

## Technologies Used

* HTML
* JavaScript
* Tailwind CSS
* React
* React Router
* JSON Server

## How It Works

1. The app displays a list of products stored in the JSON Server database.
2. Users can search for products by entering a product name.
3. Users can add a new product by entering its name, price, category, and description.
4. Users can edit existing product information.
5. Users can delete products from the product list.

## Contact

For questions, collaboration ideas, or feedback, feel free to reach out at:

[bradleychacha4@gmail.com]

## Roadmap

Potential improvements for future versions:

* Add product categories and filtering
* Add a shopping cart

## License

MIT License

Copyright © 2026 Bradley Chacha

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
