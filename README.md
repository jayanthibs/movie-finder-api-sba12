<h1 align="center"> Movie Finder API</h1>

## Overview

The **Movie Finder API** is a Node.js and Express application that allows users to search for movies and retrieve detailed movie information using the OMDb API.

The API provides endpoints for searching movies by title and fetching detailed movie data using an IMDb ID. It demonstrates working with external APIs, environment variables, Express routing, and controller-based project structure.

## Features

* Search movies by title
* Retrieve detailed movie information using IMDb ID
* Secure API key management using environment variables
* Organized project structure with routes and controllers
* Error handling and validation

## Technologies Used

* Node.js
* Express.js
* Axios
* Dotenv
* OMDb API

## Project Structure

```
movie-finder-api
│
├── controllers
│   └── movieController.js
│
├── routes
│   └── movieRoutes.js
│
├── .env
├── .gitignore
├── package.json
└── server.js
```

## Installation

1. Clone the repository

```
git clone https://github.com/jayanthibs/movie-finder-api-sba12.git
```

2. Navigate to the project folder

```
cd movie-finder-api-sba12
```

3. Install dependencies

```
npm install
```

## Environment Variables

Create a `.env` file in the root directory and add the OMDb API key.

```
OMDB_API_KEY=your_api_key_here
```

## Running the Server

Start the server using:

```
npm run dev
```

The server will run on:

```
http://localhost:3006
```

## API Endpoints

### Search Movies

Search for movies using a title.

```
GET /api/search
```

Example request:

```
http://localhost:3006/api/search?title=batman
```

Example response:

```
 [
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "imdbID": "tt0372784"
    }
  ]

```

### Get Movie Details

Retrieve detailed information about a movie using its IMDb ID.

```
GET /api/movies/:id
```

Example request:

```
http://localhost:3006/api/movies/tt0372784
```

## Error Handling

If the `title` query parameter is missing when searching movies, the API returns:

```
{
  "error": "Title query parameter is required"
}
```

The application also uses `try...catch` blocks to handle API errors and server issues.

## Testing

We can test the API using:
* Postman
* Browser
* Thunder Client (VS Code extension)

Example URLs:
```
http://localhost:3001/api/search?title=batman
```

```
http://localhost:3001/api/movies/tt0372784
```

## Security Note

The `.env` file is included in `.gitignore` to prevent exposing the API key in the GitHub repository.

