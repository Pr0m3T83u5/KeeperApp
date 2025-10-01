# 



<a id="readme-top"></a>




<!-- Heading -->
# 📝 Keeper APP

This is my third projet where I make a Google Keep-like App using React and Vite. This project is not made for commercial but rather for learning purposes. 

### Built With
*  [React](react.dev)
*  [Vite](https://vite.dev/)
  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- Setting up the project -->
<!--
## Getting Started

### Prerequisites
*  Have pgAdmin 4 (PostgreSQL) installed

### Instructions to Start the Website
1. **Create a Database**  
   In pgAdmin, create a new database named **B1ogger** (note the number `1` instead of letter `l`) under the user `postgres`.

2. **Create Tables**  
   Run the following SQL queries:
   ```sql
   CREATE TABLE users (
     id SERIAL PRIMARY KEY,
     user_name VARCHAR(100) NOT NULL UNIQUE,
     password VARCHAR(100) NOT NULL
   );
   CREATE TABLE blogs (
     id SERIAL PRIMARY KEY,
     blog_title VARCHAR(100) NOT NULL,
     blog_content TEXT NOT NULL,
     user_name VARCHAR(100) REFERENCES users(user_name)
   );
   ```
   -->
1. Clone the repo
   ```sh
   git clone https://github.com/Pr0m3T83u5/KeeperApp.git
   ```
<!--
4. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin Pr0m3T83u5/My_Blogger1_Website
   git remote -v # confirm the changes
   ```

5. **Configure Database Connection**  
   Open `index.js` and change the client details for your SQL server.
-->

2. **Install Dependencies**
   ```bash
   npm i
   ```

3. **Run the App**
   ```bash
   npm run dev
   ```
   Follow the link given in the command-console. Usually the following link should work [http://localhost:5173/](http://localhost:5173/)

   <p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Note -->
## Roadmap
- [ ] Database functionality
- [ ] Add API functionality
- [ ] Security Features

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Acknowledgements -->
## Acknowledgments

* [Best-README-template](https://github.com/othneildrew/Best-README-Template?tab=readme-ov-file)
* [App Brewary Complete-Web-Dev Course](https://www.appbrewery.com/p/the-complete-web-development-course)

<p align="right">(<a href="#readme-top">back to top</a>)</p>








<!-- Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->

