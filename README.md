# Raw Food Calculator for Cats

Welcome to the Raw Food Calculator for Cats project! This tool is designed to help cat owners calculate and prepare a balanced raw food diet for their feline companions.

---

# Important Note for Users

**Please Read This First**

This application is meant to faciliate the hassle of selecting and calcuating ingredients in order to make a balanced raw meal for cats. It is not meant to be used alone. Research on what a healthy raw diet contatins must be done.
A raw diet that is unbalanced and, frankly, made with little research can be very dangerous for your cat. When done right, it can be a very healthy choice.

This project is under active development, and some features may be incomplete or subject to change.

---

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Endpoints](api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Cats are obligate carnivores, and a raw food diet can provide them with essential nutrients and health benefits. This project aims to simplify the process of creating balanced raw meals for your cats.

## Features

- Calculate the percentages of meat, bones, and organs in your cat's diet based on a prey model (e.g., 80% meat, 10% bones, 10% organs).
- Customize the quantities and types of meat, bones, and organs to tailor the diet to your cat's needs.
- Access a user-friendly interface to select ingredients and view the calculated proportions.

## Prerequisites
Before you can run this Django-React app, make sure you have the following software and tools installed:

- Docker (https://www.docker.com/): Make sure Docker is installed and running on your machine.


## Getting Started

To get started with the Raw Food Calculator for Cats, follow these steps:

1. Clone this repository to your local machine:

   ```
   git clone https://github.com/frorellana/rawFoodCalc.git
   ```

2. Build then Docker containers:

   ```
   docker-compose build
   ```
3. Run the application:
    ```
    docker-compose up -d
    ```
    

Now you should be able to access the application at http://localhost:8000/


## Usage

This application allows you to calculate and manage raw food ratios for your cat. You can select different parts from vsrious available animals, and input the total amount of pounds you want to use. 
The cart will contain all the ingredients you selected with the corresponding amounts. You can adjust the amounts in the cart and delete any ingredients you no longer want. 
At the bottom of the cart there is a ratio section that calculates whether the  meat, bone and organ amount of the all ingredients are abalanced according to the 80 / 10 / 10 ratio. 


## API Endpoints

Here are the available API endpoints for this project at http://localhost:8000/[endpoint]:

- **Animals**
  - `GET /api/animals`: Retrieve a list of animals.
  - `GET /api/animals/<int:pk>/`: Retrieve details of a specific animal by ID.

- **Parts**
  - `GET /api/parts`: Retrieve a list of parts.
  - `GET /api/parts/<int:pk>/`: Retrieve details of a specific part by ID.

- **Images**
  - `GET /api/images`: Retrieve a list of images.
  - `GET /api/images/<int:pk>/`: Retrieve details of a specific image by ID.

- **Ratios**
  - `GET /api/ratios`: Retrieve a list of ratios.
  - `GET /api/ratios/<int:pk>/`: Retrieve details of a specific ratio by ID.

- **Animal-Part Ratios**
  - `GET /api/animalPartRatio`: Retrieve a list of animal-part ratios.

- **Extended Ratios**
  - `GET /api/extendedRatios`: Retrieve a list of extended ratios.

You can use these endpoints to interact with the API and retrieve or manipulate data.


## Contributing
Contributions to this project are welcome! If you have ideas for improvements or new features, feel free to open an issue or submit a pull request. Please review our Contributing Guidelines for more information.


## License
This project is licensed under the MIT License.
