<a href="https://www.linkedin.com/in/pejir/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin&labelColor=blue" alt="LinkedIn" /></a>



<h1>
  React-Node Recipe App 🍲
</h1>

## Project description: 

Welcome to the React-Node Recipe App! This application allows users to view, add, and manage their favorite recipes. It's built using React for the frontend and Node.js with Prisma for the backend.

## Technology Used ✨
<div>
JavaScript <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="css3" width="40" height="40"/> 
CSS <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> 
HTML  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> 
Node.js <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" alt="html5" width="40" height="40"/> 
VSCode   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="css3" width="40" height="40"/>
Debian   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/debian/debian-original-wordmark.svg" alt="css3" width="40" height="40"/>
</div>


## Getting Started 🚀

### Prerequisites:

- Node.js and npm installed on your machine.
- An account on [ElephantSQL](https://www.elephantsql.com/) for the database.
- A [Spoonacular API key](https://spoonacular.com/food-api) for the recipe API

### Setting Up:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/chrisblakely01/react-node-recipe-app.git
   cd react-node-recipe-app
   ```

2. **Setting up the Backend**:

   - Navigate to the backend directory:
     ```bash
     cd backend
     ```

   - Install the necessary packages:
     ```bash
     npm install
     ```

   - **Spoonacular API**:
     - Add the api key to the API_KEY variable in the .env file   

   - **ElephantSQL Setup**:
     - Create a new database instance on ElephantSQL.
     - Copy the connection string provided by ElephantSQL.

   - **Prisma Setup**:
     - Replace the `DATABASE_URL` in the `.env` file with your ElephantSQL connection string.
     - Initialize Prisma and generate the Prisma client:
       ```bash
       npx prisma init
       npx prisma generate
       ```

   - Start the backend server:
     ```bash
     npm start
     ```

3. **Setting up the Frontend**:

   - Navigate to the frontend directory:
     ```bash
     cd frontend
     ```

   - Install the necessary packages:
     ```bash
     npm install
     ```

   - Start the frontend development server:
     ```bash
     npm run dev
     ```

   
## Author

👤 **Roberto PEREZ**

<!--- 
* [Website](https://pejir.github.io/robertoportfolio.io/ )
* [Twitter](https://twitter.com/pejir)--->
* [Github](https://github.com/pejir)
* [LinkedIn](https://linkedin.com/in/pejir)

<!---
## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](pejir). You can also take a look at the [contributing guide](pejir).
---> 
 
## Show your support

Give a ⭐️ if this project helped you!

<!---
<a href="https://www.patreon.com/pejir">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>
--->

## 📝 License

