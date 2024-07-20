<p><h4>Backend directory of the --> </h4></p> <h2>StudyPulse MERN stack web application</h2>. <p><b>package.json</b> file contains all the necessary dependencies and dev dependencies to run the server.<p>
<p>A brief list of the current server-side dependencies:</p>
<p>"dependencies": {</p>
   <p> "cookie-parser": "^1.4.6",</p>
    <p>"cors": "^2.8.5",</p>
   <p> "date-fns": "^3.6.0",</p>
   <p> "dotenv": "^16.4.5",</p>
   <p> "express": "^4.19.2",</p>
   <p> "mongoose": "^8.5.1",</p>
   <p> "uuid": "^10.0.0"</p>
 <p> },</p>
 <p> "devDependencies": {</p>
    <p>"nodemon": "^3.1.4"</p>
 <p> }</p>
<p>All node-modules will be ignored in the git operations, hence a LTS version of <b>NODE.js</b> and <b>Node Package Manager</b> installation is a pre-condition to set up the <b>Express.js server.</b> 
<p>"main": "server.js",</p>
 <p> "scripts": {</p>
   <p> "start": "node server",</p>
   <p> "dev": "nodemon server"</p>
 <p> }</p>
<p><b>server.js</b> is the main gateway script for the server. <b>"npm start"/ "npm start dev"</b> commands will subsequently trigger the server on port 3500. </br>

<b>server.js</b> file imports all the necessary modules for server operations. </br>

<b>config folder</b> has regulatory directive and database connection file.</br> 

<b>logs folder</b> is in charge of storing logging events, both server requests and error logs.</br>

<b>middleware folder</b> has files with error handling logics and event logs formatting. </br>

<b>models folder</b> has all the database schema files and more will be added in line with functionality expansion and app scaling. </br>

<b>routes folder</b>  has a root.js file which handles incoming API endpoints requests and performs HTTP methods on user requests. </br>

<b>views folder</b> will have all html pages to be rendered to user's web browser. </br>

<b>public folder</b> will contain styling files and asset files. </br>

<b>.env file</b> will contain environment variables. More variables will be added along the developmenet and testing phase. </br>
Express server will connect to a<b> MongoDB database</b> (cluster name: MERN-stack-app)for CRUD operations.</p>

