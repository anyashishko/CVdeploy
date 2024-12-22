import React from 'react';
import styles from '../styles/Portfolio.module.css';
import lamodaImage from '../assets/lamoda-image.jpg'; 
import notionReduxImage from '../assets/notion-redux-image.jpg'; 
import apiSpaImage from '../assets/api-spa-image.jpg'; 
import todoListImage from '../assets/todo-list-image.jpg'; 

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2>Portfolio</h2>
      <ul>
        <li>
          <h3>Lamoda Project</h3>
          <p>
        Online store with filtering and sorting capabilities
products.
          </p>
          <p>
            <strong>Technologies used:</strong> React, CSS, Node.js
          </p>
          <p>
            <a href="https://github.com/anyashishko/lamoda" target="_blank" rel="noopener noreferrer">
              View the code on GitHub
            </a>
          </p>

          <img src={lamodaImage} alt="Lamoda Project Demo" className={styles.projectImage} />
        </li>

        <li>
          <h3>Notion-Redux</h3>
          <p>
          The task involves creating a multi-page application using Redux (without @redux-toolkit) and a JSON server to store data. Key points include managing users, notes, authentication, and data validation, as well as implementing a responsive interface.
          </p>
          <p>
            <strong>Technologies used:</strong> React, Redux, CSS
          </p>
          <p>
            <a href="https://github.com/anyashishko/Notion-Redux" target="_blank" rel="noopener noreferrer">
              View the code on GitHub
            </a>
          </p>

          <img src={notionReduxImage} alt="Notion-Redux Project Demo" className={styles.projectImage} />
        </li>

        <li>
          <h3>API-SPA</h3>
          <p>
          The project is a multi-page application built using the react-router-dom library and the external JSONPlaceholder API. The main goal is to demonstrate how to work with routing, APIs and modern styling libraries.
          </p>
          <p>
            <strong>Technologies used:</strong>  React, react-router-dom, JSONPlaceholder, CSS Module
          </p>
          <p>
            <a href="https://github.com/anyashishko/API-SPA" target="_blank" rel="noopener noreferrer">
              View the code on GitHub
            </a>
          </p>

          <img src={apiSpaImage} alt="API-SPA Project Demo" className={styles.projectImage} />
        </li>

        <li>
          <h3>TODO-List</h3>
          <p>
          The project is a task management app drawn by Todoist, with a pocket filter. Users can add, reduce, delete tasks, and apply various filters for easy searching and sorting.
          </p>
          <p>
            <strong>Technologies used:</strong> React, CSS
          </p>
          <p>
            <a href="https://github.com/anyashishko/TODO-List" target="_blank" rel="noopener noreferrer">
              View the code on GitHub
            </a>
          </p>

          <img src={todoListImage} alt="TODO-List Project Demo" className={styles.projectImage} />
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
