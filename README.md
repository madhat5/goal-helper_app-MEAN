# goal-helper_app-MEAN - Final Project (MEAN)
---

Links:

- Instructions:
    - https://github.com/ga-students/wdi_lettuce_students/blob/master/projects/project4/project.md
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

- Build a full-stack application by making your own backend and your own front-end
- Have an API of your design
- Have an interactive front-end, preferably using a modern front-end framework
- Be a complete product, which most likely means multiple relationships and CRUD functionality for at least a couple models
- Use a database, whether that's one we've covered in class or one you want to learn
- Implement thoughtful user stories that are significant enough to help you know which features to build and which to scrap
- Have a visually impressive design to kick your portfolio up a notch and have something to wow future clients & employers
- Be deployed online so it's publicly accessible

Necessary Deliverables

- A working API, hosted somewhere on the internet
- A working front-end, hosted somewhere on the internet
- A link to your hosted working app in the URL section of your Github repo
- A git repository hosted on Github, with a link to your hosted project, and frequent commits dating back to the very beginning of the project
- A readme.md file with:
- An embedded screenshot of the app
- Explanations of the technologies used
- A couple paragraphs about the general approach you took
- Installation instructions for any dependencies
- Link to your user stories – who are your users, what do they want, and why?
- Link to your wireframes – sketches of major views / interfaces in your application
- Link to your pitch deck – documentation of your wireframes, user stories, and proposed architecture
- Descriptions of any unsolved problems or major hurdles you had to overcome

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

- user
    - username/email: string
    - password: string?
    - embed goals: obj

- goals
	- title: string
	- steps: string
		- step_completed: boolean
	- goal_completed: boolean

User story: (UPDATE)
(MOAR MODALS!!!)

- landing page:
    - log in button
        - > opens login form (passport) as modal
    - register form
    - tutorial button
    - register buton
        - > opens register form (passport) as modal
    - # of goals and # of goals completed


+features:

- 

---
---
App Build Steps:

- server --x--
	- mkdir server
		- touch server/server.js 
		- touch server/app.js
		- mkdir routes
		- mkdir models

- npm init --x--
	-'enter' through all the prompts

- packages setup --x--
	- npm install --save express morgan mongoose cookie-parser body-parser express-session passport bcrypt-nodejs passport-local passport-local-mongoose
	- app.js
		- dependecies
			- var express = require('express');
			- morgan = require('morgan')
			- mongoose = require('mongoose')
			- cookieParser = require('cookie-parser')
            - bodyParser = require('body-parser')
            - expressSession = require('express-session'')
            - passport = require('passport')
            - path = require('path')
            - hash = require('bcrypt-nodejs')
            - localStrategy = require('passport-local' ).Strategy;
		- express
			- var app = express();
		- middleware
			- app.use(morgan('dev'));
			- app.use(cookieParser());
            - app.use(bodyParser.urlencoded({ extended: true}));
            - (ADD SCRIPT)
		- mongo
			- mongoose.connect('mongodb://localhost/db_name');
		- passport
			- (ADD SCRIPT)
		- routes
			- (ADD SCRIPT)
		- error
			- (ADD SCRIPT)

- app port & listener --x--
	- server.js
		- var debug = require('debug')('passport-mongo'),
    	- app = require('./app');
		- var port = process.env.PORT || 3000;
		- var server = app.listen(port, function(){
 			debug('Silence please...' + 'Curtains up...' + '\n' + 'Server started on: ' + port)
		});

- models build --x--
    - mkdir models
    	- touch models/user.js
    	- touch models/post.js
    - server.js
    	- var User = require('./models/user.js');
    - user.js
		- var mongoose = require('mongoose'),
		- Schema = mongoose.Schema,
		- passportLocalMongoose = require('passport-local-mongoose');
	- var User = new Schema({ ... });
	- User.plugin(passportLocalMongoose);
	- var userMongoose = mongoose.model('users', User);
	- module.exports = userMongoose;

- routes --ox--
	- touch routes/api.js
	- build
		- registration
		- login
		- logout
	- test

- mkdir client --o--
	- touch index.html
	- touch main.js
	- mkdir partials
		- touch home.html

- models build --o--
    - server.js
    	- var Goal = require('./models/goal');
    - post.js
        - var mongoose = require('mongoose');
        - var postSchema = new mongoose.Schema({ ... });
        - var Post = mongoose.model('Post', postSchema);
        - module.exports = Post;

- CDN --o--
	- js-cookie URL 
    - Angular

- Story build --o--
    - 
    
- CSS --o--
	- bootstrap


- Remaining:
	- 


---
---
Reference

- Git merging
    - https://github.com/ga-students/wdi_lettuce_students/blob/master/w08/d02/INSTRUCTOR/git_solo.md

- Embedding/referencing:
	- https://github.com/ga-students/wdi_lettuce_students/blob/master/w08/d01/INSTRUCTOR/%5Ba1%5Dmongo.md
	- https://github.com/ga-students/wdi_lettuce_students/blob/master/w08/d01/INSTRUCTOR/%5Bb1%5Dmongoose_data_modeling.md

- Passport
	- http://mherman.org/blog/2015/07/02/handling-user-authentication-with-the-mean-stack/#.Vmove-ODGko
	- strategy:
		- http://www.codexpedia.com/node-js/node-js-authentication-using-passport-local-strategy/

- Bootstrap
	- http://www.tutorialrepublic.com/twitter-bootstrap-tutorial/

- Angular if/else
	- https://docs.angularjs.org/api/ng/directive/ngSwitch
	- http://stackoverflow.com/questions/15810278/if-else-statement-in-angularjs-templates
	




---
---
Comments/Notes:

- tips:
    - Kyle (dragable div)
    - Katie Z (modal)
    - Robbie (dynamic searches)


