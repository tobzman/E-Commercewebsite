# E-Commercewebsite

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Mock-Up](#mock-up)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Testing](#testing)

## Description

This is the back-end component of an e-commerce website. It's built using Express.js and Sequelize to interact with a MySQL database. The API provides functionality for managing categories, products, and tags, allowing users to create, read, update, and delete data.

## User Story

As a manager at an internet retail company, I want a back end for my e-commerce website that uses the latest technologies so that my company can compete with other e-commerce companies.

## Acceptance Criteria

- [x] Create a functional Express.js API.
- [x] Configure the database connection using Sequelize.
- [x] Create a schema for the database.
- [x] Seed the database with test data.
- [x] Start the server and sync Sequelize models to the database.
- [x] Implement API GET routes for categories, products, productTag and tags.
- [x] Implement API POST, PUT, and DELETE routes for categories, products, productTag and tags.

## Mock-Up

[Link to Your Walk<video src="week%2013%20video.mp4" controls title="week 13"></video>through Video]

## Getting Started

To get started with this project, follow these steps:

### Installation

1. Clone the repository:

   - bash:
     git clone https://github.com/yourusername/e-commerce-backend.git

2. Navigate to the project directory:

- bash:
  cd e-commerce-backend

3. Install dependencies:

- bash:
  npm install

## Database Setup

1. Create a .env file in the project root and add your database credentials:

- env file:
  DB_NAME=your_database_name
  DB_USER=your_database_user
  DB_PASSWORD=your_database_password
  DB_HOST=your_database_host
  DB_PORT=your_database_port

2. Create the database schema:

- bash:
  npm run db:create

3. Seed the database:

- bash:
  npm run seed

## Usage

Start the server:

- bash:
  node server.js

The API will be accessible at http://localhost:3001.

## API Routes

- Categories:

GET /api/categories - Get all categories.
GET /api/categories/:id - Get a single category by ID.
POST /api/categories - Create a new category.
PUT /api/categories/:id - Update a category by ID.
DELETE /api/categories/:id - Delete a category by ID.
Products:

GET /api/products - Get all products.
GET /api/products/:id - Get a single product by ID.
POST /api/products - Create a new product.
PUT /api/products/:id - Update a product by ID.
DELETE /api/products/:id - Delete a product by ID.
ProductTags:

GET /api/ProductTags - Get all ProductTags.
GET /api/ProductTags/:id - Get a single ProductTags by ID.
POST /api/ProductTags- Create a new ProductTags.
PUT /api/ProductTags/:id - Update a ProductTags by ID.
DELETE /api/ProductTags/:id - Delete a ProductTags by ID.
Tags:

GET /api/tags - Get all tags.
GET /api/tags/:id - Get a single tag by ID.
POST /api/tags - Create a new tag.
PUT /api/tags/:id - Update a tag by ID.
DELETE /api/tags/:id - Delete a tag by ID.

## Testing

You can use tools like Insomnia or Postman to test the API routes. Refer to the walkthrough video for examples of how to use the routes.
