Explanation of the project:
1) we have first made login and signup page and the credentials are encrypted when going to the database.
2) next we have a "create or join room" option i.e., if you enter a new room id, you will create a new room else if you enter an existing id, you will join an already existing room.

Now you can access the group chat.
You can also start one to one chat by clicking on available members.
3) We have integrated a group docs using socket io. It is a text editor using quill. Each group will have a separate doc. It has real time changes across devices which will be reflected for the team members. 
4) we have a task manager available for all the members of the community using socket.io, 
we have options to add , delete and to assign important status to tasks.

Tech Stack: React, Socket.io, MongoDB, Express.js, Node.js 
Additional Packages: Redux Toolkit, Quill Text Editor, ChakraUI package, Bootstrap, ant Design

Process for initiating frontend and backend on local machine:
1) After cloning the repository, in the frontend folder, do "npm install", then "npm run start".
2) Then do the same for backend folder.

If you create room, and don't see it in the room list, please refresh.
In task manager,if you don't see the tasks initially, then please refresh.

Lastly, we changed the backend_url and frontend_url as we were not able to deploy the app.
