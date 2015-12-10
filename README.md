# goal-helper_app-MEAN - Final Project (MEAN)
---

Links:

- Instructions:
    - https://github.com/ga-students/wdi_lettuce_students/blob/master/schedule.md

- Project:
    - GitHub
        - https://github.com/madhat5/goal-helper_app-MEAN
    - Wireframes
        - https://moqups.com/#!/edit/madhat5/jR69snL3
    - Trello link
        - https://trello.com/b/79qQIpKD/wdi-project-4a-post-it
    - Heroku
        - 

---
Technical Requirements:

- Use Mongo & Express to build an API and a front-end that consumes it
- Create an API using at least 2 related models, one of which should be a user
- Include all major CRUD functions in a RESTful API for at least one of those models
- Consume your own API by making your front-end with HTML, Javascript, & jQuery
- Add authentication to your API to restrict access to appropriate users
- Layout and style your front-end with clean & well-formatted CSS
- Deploy your application online so it's publically accessible

---
Timeline goals: (start by)

- Wed 12/2 --x--
    - Start planning mini-app (Rails or Mean) today
- Sat 12/5 --o--
    - 1st mini-app finished during the weekend
- Sun 12/6 --o--
    - Start planning 2nd mini-app 
- Wed 12/9
    - 2nd app finished 
- Thu 12/10
    - Final project planning
- Thu 12/17 
    - Final project finished

--
Deployment flow:

- Create development branch
    - from master
        - git checkout -b development       
- Pull @ beginning of day
    - from development
        - git pull origin master
        - (npm install) if needed
- Create 1 branch per file feature
    - from development
        - git checkout -b file_feature
- By end of day 
    - from branch
        - git add .
        - git commit -m "update details"
        - git push origin file_feature
        - (gitHub
            - Pull request)
        - OR
        - (git push origin development)
        - git checkout development
    - from development
    - (gitHub
        - Pull request)
    - OR
    - (git push origin master)

---
MVP

Models:

- post
    - comment
    - author


User story: (UPDATE)
(MOAR MODALS!!!)

- landing page:
    - log in button
        - > opens stormpath login form as modal
    - register form
    - tutorial button
    - register buton
        - > opens stormpath register form as modal
    - # of goals and # of goals completed


+features:

- modal for create form
	- create post > show new post form
- total posts display

---
---
App Build Steps:

- touch server.js --x--

- npm init --x--
	-'enter' through all the prompts

- packages setup --x--
	- npm install --save express morgan mongoose cookie-parser body-parser
	- server.js
		- dependecies
			- var express = require('express');
			- var morgan = require('morgan');
			- var mongoose = require('mongoose');
			- var cookieParser = require('cookie-parser');
            - var bodyParser = require('body-parser');
		- var app = express();
		- middleware
			- app.use(morgan('dev'));
			- app.use(cookieParser());
            - app.use(bodyParser.urlencoded({ extended: true}));
		- mongo
			- mongoose.connect('mongodb://localhost/db_name');

- app port & listener --x--
	- server.js
		- var port = process.env.PORT || 3000;
		- app.listen(port);
		- console.log('Silence please...');
		- setTimeout(function(){console.log('Curtains up...' + '\n' + 'Server started on ' + port)}, 1000);

- test connection --x--
    - setup basic route

- mkdir public --x--
	- server.js
		- app.use(express.static('public'));
	- touch public/index.html
	- touch public/app.js
	- touch public/style.css

- test connection --x--
    - setup basic route
    - setup basic index.html/app.js
    - launch server (nodemon/mongod) 

- models build --x--
    - mkdir models
    - touch models/post.js
    - server.js
        - var Post = require('./models/post');
    - post.js
        - var mongoose = require('mongoose');
        - var postSchema = new mongoose.Schema({ ... });
        - var Post = mongoose.model('Post', postSchema);
        - module.exports = Post;

- CDN --x--
	- js-cookie URL 
    - Angular

- Story build --ox--
    - server.js
    - public/index.html
    - public/app.js

- CSS --o--
	- bootstrap


- Remaining:
    - debug angular
    - fonts/bootstrap/draggable posts
    - heroku

---
---
Reference

- Git merging
    - https://github.com/ga-students/wdi_lettuce_students/blob/master/w08/d02/INSTRUCTOR/git_solo.md




---
---
Comments/Notes:

- !!seed worked, but user input didnt

- didn't have my route set right (/post instead of /posts)

- tips:
    - Kyle (dragable div)
    - Katie Z (modal)
    - Robbie (dynamic searches)


