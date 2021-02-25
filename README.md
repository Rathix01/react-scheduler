## How to use
You can run the solution in 2 ways. The build folder contains a compiled version of the application and can be run using php -S localhost:8000. Or you can start the application with NodeJS from the root. This will require a npm install and then can be started using npm run start.

## Build example

To build example run:

```
npm install
npm run build
```

This builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Troubleshooting

In the case of compile error (`npm run build` or `npm start` fails) try to delete `node_modules` folder and `package-lock.json` file in example's folder and then build example or run development server as suggested above.
