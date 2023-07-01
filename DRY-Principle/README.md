# DRY-Principle

This project utilizes Node.js, Express, and Sequelize to implement the DRY (Don't Repeat Yourself) principle. It follows a specific folder structure that includes a `service` directory containing classes and code for the business logic. The main class in this structure is called `Service`, which accepts a `SequelizeModel` and provides four CRUD operations. Additionally, `userService` and `orderService` extend the `Service` class to handle user and order-related operations.

## Problem Description

When developing software applications, it's common to encounter repetitive code and duplicate logic. This leads to increased maintenance efforts, decreased code readability, and potential bugs due to inconsistencies. The lack of adherence to the DRY principle can make the codebase difficult to maintain and scale.

## Solution Description

To address the problem of code duplication and improve maintainability, this project embraces the DRY principle. By following a specific folder structure and utilizing the `Service` class, the project aims to minimize redundant code and maximize code reusability.

The `Service` class acts as a centralized component responsible for the basic CRUD (Create, Read, Update, Delete) operations. It accepts a `SequelizeModel` and provides a consistent interface for performing these operations. The `userService` and `orderService` classes extend the `Service` class and provide additional methods specific to user and order-related operations.

By organizing the code into separate service classes and utilizing the `CRUDController` in the `controllers` folder, the project achieves a cleaner and more modular architecture. This approach facilitates better code organization, promotes code reuse, and reduces the overall complexity of the application.

## Folder Structure

The project follows a specific folder structure for implementing the DRY principle:

- `service`: This folder contains classes and code for the business logic.
- `Service.js`: The main class that accepts a `SequelizeModel` and provides four CRUD operations.
- `userService.js`: Extends the `Service` class to handle user-related operations.
- `orderService.js`: Extends the `Service` class to handle order-related operations.
- `controllers`: This folder contains the general `CRUDController` to reduce code duplication.
- `CRUDController.js`: Accepts an instance of `userService` or `orderService` and applies different operations.

## Contributing

Contributions are welcome! If you find any issues or would like to add new features, please feel free to submit a pull request.
