import React from 'react';
import './style.css';

const courses = [
  { img: 'images/cpp.jpg', alt: 'c++', link: 'cpp.html', name: 'C++' },
  { img: 'images/java.jpg', alt: 'java', link: 'jv.html', name: 'JAVA' },
  { img: 'images/phython.png', alt: 'python', link: 'pyh.html', name: 'PYTHON' },
  { img: 'images/html.jpg', alt: 'html', link: 'htmls.html', name: 'HTML' },
  { img: 'images/css.png', alt: 'css', link: 'cs.html', name: 'CSS' },
  { img: 'images/javascript.jpg', alt: 'javascript', link: 'script.html', name: 'JAVASCRIPT' },
  { img: 'images/php.png', alt: 'Php', link: 'php.html', name: 'PHP' },
  { img: 'images/game development.jpeg', alt: 'Game Development', link: 'game.html', name: 'GAME DEVELOPMENT' },
  { img: 'images/app-development.jpg', alt: 'App Development', link: 'app.html', name: 'APP DEVELOPMENT' },
  { img: 'images/DATA SCIENCE.jpg', alt: 'Data Science', link: 'data.html', name: 'DATA SCIENCE' },
  { img: 'images/banend.jpg', alt: 'backend development', link: 'back.html', name: 'BACKEND' },
  { img: 'images/machine learning.jpg', alt: 'machine learning', link: 'machine.html', name: 'MACHINE LEARNING' },
];

export default function LearnProgramming() {
  return (
    <div>
      <header>
        <div className="logo">
          <img src="images/Logo.png" alt="Logo" />
        </div>
        <nav className="nav">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="courses.html">Courses</a></li>
            <li><a href="notes.html">Notes</a></li>
            <li><a href="practice.html">Practice</a></li>
            <li><a href="contact.html">Contact us</a></li>
            <li><a href="about.html">About us</a></li>
          </ul>
        </nav>
        <div className="Signin">
          <a href="Sign.html">Sign in</a>
        </div>
      </header>

      <main>
        <p>Hello, What Do You Want To Learn?</p>

        <form className="search" onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder="Search for courses, notes, or practice..." />
          <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>

        <div className="box-container">
          <p>Courses</p>
          {courses.map((course, index) => (
            <div className="card" key={index}>
              <img src={course.img} alt={course.alt} />
              <a href={course.link}>{course.name}</a>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <div className="footer-content">
          <p>&copy; 2023 Learn Programming Languages. All rights reserved.</p>
          <div className="socials">
            <a href="f.html"><i className="fab fa-facebook-f"></i></a>
            <a href="t.html"><i className="fab fa-twitter"></i></a>
            <a href="i.html"><i className="fab fa-instagram"></i></a>
            <a href="l.html"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="footer-links">
          <a href="p.html">Privacy Policy</a>
          <a href="s.html">Terms of Service</a>
          <a href="c.html">Contact Us</a>
          <a href="q.html">FAQ</a>
        </div>
      </footer>
    </div>
  );
}
