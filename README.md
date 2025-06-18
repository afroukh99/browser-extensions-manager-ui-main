# Frontend Mentor - Browser Extensions Manager UI Solution

This is a solution to the [Browser Extensions Manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp).  
This project helps enhance practical front-end skills by building a realistic and interactive UI.

---

## Table of Contents

- [Overview](#overview)  
  - [The Challenge](#the-challenge)  
  - [Screenshot](#screenshot)  
  - [Links](#links)  
- [My Process](#my-process)  
  - [Built With](#built-with)  
  - [What I Learned](#what-i-learned)  
  - [Continued Development](#continued-development)  
  - [Useful Resources](#useful-resources)  
- [Author](#author)  
- [Acknowledgments](#acknowledgments)

---

## Overview

### The Challenge

Users should be able to:

- Toggle extensions between active and inactive states  
- Filter extensions based on their status (all, active, inactive)  
- Remove extensions from the list  
- Toggle between light and dark themes  
- View a responsive layout that adapts to different screen sizes  
- Experience smooth hover and focus states for all interactive UI elements  

### Screenshot

![Screenshot](./screenshot.jpg)  
*Screenshot taken in Firefox using the built-in screenshot tool. Optimized for clarity and layout overview.*

### Links

- Solution URL: [GitHub Repo](https://github.com/afroukh99/browser-extensions-manager-ui-main)  
- Live Site URL: [Live Demo](https://afroukh99.github.io/browser-extensions-manager-ui-main/)  

---

## My Process

### Built With

- [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)  
- [Vite](https://vitejs.dev/) for a fast development experience  
- [Tailwind CSS v4 (alpha)](https://tailwindcss.com/) for utility-first styling  
- Semantic HTML5  
- Flexbox  
- Mobile-first, responsive design  
- Functional components and React hooks  

### What I Learned

- How to build a theme toggle feature using React Context  
- Handling localStorage to persist state (theme and filters)  
- Implementing filters using enums and context logic  
- Using TypeScript to enforce component props and context structure  

#### Sample Code:

```ts
const getFilteredExtensions = useMemo(() => {
  switch (filter) {
    case FilterState.Active:
      return data.filter((ext) => ext.isActive);
    case FilterState.Inactive:
      return data.filter((ext) => !ext.isActive);
    default:
      return data;
  }
}, [data, filter]);
