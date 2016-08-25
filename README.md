How to run this project locally
###

1. Install node and npm over here https://nodejs.org/en/download/ and https://www.npmjs.com/package/npm
1. Visit http://www.developerhandbook.com/typescript/writing-angularjs-1-x-with-typescript/ and read the full "how to"
1. Install bower (npm install bower --global)
1. Run `bower install` (it will take configuration from bower.json file)
1. Here in the project I'm not using "tsd". Use typings insted. https://github.com/typings/typings 
1. In my case I've run typings with dt as a source and saved it globally (typings install dt~mocha --global --save)
1. Run `typings install`
1. I build all *.ts into one under build directory and enable mapping to debug it through web tools
1. Install http-server running command `npm install -g http-server`
1. Run `http-server -o --cors` in top folder of the project
1. Open http://localhost:8080 in your browser