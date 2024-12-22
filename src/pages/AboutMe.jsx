import React from 'react';
import styles from '../styles/AboutMe.module.css';
import profilePhoto from '../assets/profile.jpg'; // Путь к изображению профиля

const AboutMe = () => {
  return (
    <section id="about" className={styles.aboutMe}>
      <div className={styles.aboutMeContent}>
        <img src={profilePhoto} alt="Shishko Hanna Maksimovna" className={styles.profileImage} />
        <div className={styles.aboutText}>
          <h2>About Me</h2>
          <p><strong>Full Name:</strong> Shishko Hanna Maksimovna</p>
        
          <p><strong>Languages:</strong> Russian, English</p>
          <p><strong>English proficiency level:</strong> B2</p>
          
          <h3>Work Experience</h3>
          <ul>
            <li>
              <strong>Education:</strong> Bachelor’s degree in Mathematics and Computer Science from BSU (Faculty of Mechanics and Mathematics).
            </li>
            <li>
              <strong>Profiling:</strong> web programming and Internet technologies.
            </li>

          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
