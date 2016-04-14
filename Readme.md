# Welcome to Egg

Egg is a responsive none theme for Echo &amp; Co.. Only the best frickin theme ever

@author: Bill Brown and friends at Echo & Co., http://echo.co

It uses a few core tools:

* Grunt, http://gruntjs.com - A javascript (node) task runner
    * Used to compile everything (compile things, optimize things, copy things, etc.)
    * See comments at the top of '/Gruntfile.js' for installation info
* Libsass, http://sass-lang.com/libsass - a very fast CSS precompiler
    * Runs through the grunt-node-sass wrapper
    * After Grunt installation, run 'grunt css' to compile your scss to css once, and 'grunt watch' to compile on save
* Autoprefixer, https://github.com/postcss/autoprefixer - postcss plugin to automatically apply vendor prefixes depending on browser support.
    * see the autoprefix task in /config/css.js for specific browser support


# Directory Structure

    Egg
      │  
      ├── /build: all production ready assets. All compiled by grunt. Do not edit manually.
      │
      ├── /config: These hold all the grunt tasks. Where we tell grunt to do the things it does.
      │
      ├── /img: your images
      │
      ├── /node_modules: npm packages downloaded from package.json. DONT EDIT THIS BY HAND
      │
      ├── /src: all source files for your custom front-end assets
      │   │
      │   ├── /js: javascripts
      │   │   │
      │   │   ├── /vendor: this will all be concatenated and minified by grunt
      │   │   │
      │   │   ├── custom.js - all of your custom scripts
      │   │   │
      │   │   └── modernizr.js - a custom build, needs to be its own file since it goes in the <head>
      │   │
      │   ├── /sass: Sass files. Read more about sass in this theme on /src/sass/main.scss
      │   │
      │   └── /sprites: SVGs to be turned into a sprite by grunt. No png fallback necessary.
      │
      
      ├── .editorconfig - configurations for text editors
      │
      ├── .gitignore - theme level gitignore
      │
      ├── .nvmrc - a version of node that this front-end setup will work with
      │
      ├── Gruntfile.js - defines all your grunt tasks
      │
      └── package.json - manifest of all your npm modules




