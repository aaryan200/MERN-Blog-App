# MERN-Blog-App
Blog application using MERN
## Get Started
* Clone this repo and head over to the directory
```bash
git clone https://github.com/aaryan200/MERN-Blog-App.git
cd MERN-Blog-App
```
* Change directory to `api` and change `MONGO_URL` in `index.js` with the link to your MongoDB cluster
* Install dependencies and then start the backend
```bash
npm i
npm run start
```
* Change directory to `client`, install the dependencies and start the application
```bash
npm i
npm start
```
## This web app consists of follwing features and tech
* To connect with MONGODB, `mongoose` is used in backend and `axios` is used in frontend
* To handle the routes, `Express` and `Node` are used in backend and `react-router-dom` is used in frontend
* To get user info, context api is used
* Register and login to your account
  * Passowrd encryption is done using `bcrypt`
* Read blog of other users
* Write your own blog
* Edit or delete your blogs
* Filter blogs based on author or category
* Edit your profile info, delete account
* Logout
