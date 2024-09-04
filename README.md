# Movie Website

This project is a Movie website built using React.js. The website allows users to browse and interact with a collection of movies and series, providing a sleek and modern user interface.


## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

## Features

- **Home Page**: Displays a grid layout with a main content area, left sidebar for profile information, and right sidebar for media services and genres.
- **Search Functionality**: Users can search for movies and series using the search bar in the navigation bar.
- **Hover Effects**: Interactive hover effects on images and buttons for a more engaging user experience.
- **Right Sidebar**: Includes quick access to different media services and genres, as well as user profile and settings.
- **Left Sidebar**: Includes quick access to different user profile and settings.
- **Continue Watching Section**: Displays a list of series that the user has started watching, allowing easy access to continue.

## Usage

- Browse the homepage and view movies and series.
- Use the search bar to find specific movies.
- Explore different genres and media services from the right sidebar.
- View and update profile information from the left sidebar.


## Project Structure
```
movie-stream/
│
├── public/
│   ├── index.html          # Main HTML file
│   └── ...                 # Other public assets
│
├── src/
│   ├── assets/              #Images of movies 
│   │   ├── Tall_Girl.png
|        
│   ├── App.js              # Root component
│   ├── index.js            # Entry point of the application
│   |__ index.css           # Global and component-specific styles
|   |__ NavBar.js           # Navigation bar component
|   |__ BodyContent.js      # Main content component
|   |__ RightSidebar.js     # Right sidebar component
│   |__ LeftSidebar.js      # Left sidebar component
│
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **CSS**: Custom styles for layout and design.
- **FontAwesome**: Icons used in the UI.
- **Google Fonts**: `Quicksand` font for a modern and clean look.
