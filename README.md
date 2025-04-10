# MalaUva FrontEnd

Current state: MVP  
Version: v0.1  

MalaUva is a wine cellar online, focused on bringing the wine lifestyle to modern audiences by being a place where everyone can feel understood in terms of tastes.

![alt text](public/reame_img/Mstd_RRSS_Instagram_MU_013.jpg)
![alt text](public/reame_img/Mstd_RRSS_Instagram_MU_007.jpg)
![alt text](public/reame_img/Mstd_RRSS_Instagram_MU_004.jpg)
![alt text](public/reame_img/Mstd_RRSS_Instagram_MU_008.jpg)


## Table of Contents
- [MalaUva FrontEnd](#malauva-frontend)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
  - [Tech Stack](#tech-stack)

## Overview
MalaUva is a React-based frontend application designed to provide users with an immersive experience in exploring wines, their stories, and the lifestyle associated with them. The platform aims to make wine culture accessible and enjoyable for everyone, regardless of their level of expertise.

## Features
- **User-friendly Interface**: Intuitive design for easy navigation.
- **Wine Exploration**: Browse and discover wines based on preferences.
- **Storytelling**: Highlighted sections for wine stories and culture.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Dynamic Routing**: Seamless navigation between pages like Home, About, and Signup.

## Technologies Used
- **Frontend Framework**: React
- **Styling**: CSS/SCSS
- **State Management**: Context API
- **Routing**: React Router
- **Build Tool**: Vite
- **Version Control**: Git

## Installation
To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
```bash
cd malauva-frontend
```

3. Install dependencies: 
```bash
npm install
```

## Usage
To start the development server, run:

```bash
npm run dev
```
The application will be available at http://localhost:3000.

To build the project for production, use:

```bash
npm run build
```

## Project Structure
```
src/
├── components/         # Reusable UI components
│   ├── elements/       # Smaller UI elements
│   ├── pages/          # Page-level components
├── data/               # Global variables and constants
├── reducers/           # Redux-like reducers for state management
├── router/             # Application routing
├── utils/              # Utility functions, hooks, and contexts
├── App.tsx             # Main application component
├── main.tsx            # Entry point of the application
public/
├── assets/             # Static assets like images and fonts
```

## Tech Stack

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)