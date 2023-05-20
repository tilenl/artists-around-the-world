### How to run a built version of Seminar?

First we need to install npm! (link: https://www.npmjs.com)

```bash
# install the serve library, which allows you to serve static pages
npm install -g serve

# if we're not already in the build directory, let's move to it (where we have index.html)
cd build

# in the build directory (where index.html is located) run serve
serve

# serve tells us where the accessible page is
# it's probably at http://localhost:3000
```

If we are in the root directory of the seminar, where src, README.md, package.json and build are, we can also execute the serve command:

```bash
# this tells the serve command that index.html is located in the build directory
serve build
```