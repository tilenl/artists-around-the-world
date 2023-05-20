#### How to start?

The application needs a way to serve files, so we need a mini-server to offer them (CORS policy problem) 🙂

1. The application is available on the public domain https://wtw2de.csb.app/

2. We can run it locally in 2 ways:
  - run an already built version of the application with the "serve" command (more instructions in the build directory) <- FASTER WAY
  - run with the "npm start" command

### From here on, a description of how to start via the "npm start" command

First we need to install npm! (link: https://www.npmjs.com)

Let's make sure that we are really in the directory on the command line, we can move to the directory via the command below

```bash
# If we are not already in the directory where README.md, package.json, src... let's move there
cd project-1-final # The directory name is "project-1-final" in this case, replace with your own name
```

````bash
# install all the dependencies needed to run the application (takes about 2-3 minutes)
npm install # create a directory "node_modules" containing all the necessary libraries

# run the application, which should be available at http://localhost:3000 (it is displayed in the console when the command is run).
npm start
```

#### Enjoy the application!!