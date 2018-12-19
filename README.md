<<<<<<< HEAD
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
=======
This project is based on [Create React App v2](https://github.com/facebookincubator/create-react-app) and [netlify-lambda v1](https://github.com/netlify/netlify-lambda). (For more information about Create react App, check their full [documentation](https://github.com/facebookincubator/create-react-app#create-react-app).)

The main addition is a new folder: `src/lambda`. Each JavaScript file in there will automatically be prepared for Lambda function deployment.

As an example, we've included a small `src/lambda/hello.js` function, which will be deployed to `/.netlify/functions/hello`. We've also included an async lambda example using async/await syntax in `async-chuck-norris.js`.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/create-react-app-lambda)

## Babel/webpack compilation

All functions are compiled with webpack using the Babel Loader, so you can use modern JavaScript, import npm modules, etc., without any extra setup.

## Local Development

Before developing, clone the repository and run `yarn` from the root of the repo to install all dependencies.

### Option 1: Starting both servers at once

Most people should be able to get up and running just by running:

```bash
yarn start
```

This uses [npm-run-all](https://github.com/mysticatea/npm-run-all#readme) to run the functions dev server and app dev server concurrently.

### Option 2: Start each server individually

**Run the functions dev server**

From inside the project folder, run:

```
yarn start:lambda
```

This will open a local server running at `http://localhost:9000` serving your Lambda functions, updating as you make changes in the `src/lambda` folder.

You can then access your functions directly at `http://localhost:9000/{function_name}`, but to access them with the app, you'll need to start the app dev server. Under the hood, this uses `react-scripts`' [advanced proxy feature](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#configuring-the-proxy-manually) with the `setupProxy.js` file.

**Run the app dev server**

While the functions server is still running, open a new terminal tab and run:

```
yarn start:app
```

This will start the normal create-react-app dev server and open your app at `http://localhost:3000`.

Local in-app requests to the relative path `/.netlify/functions/*` will automatically be proxied to the local functions dev server.

## Typescript

<details>
  <summary>
    <b id="typescript">Click for instructions</b>
  </summary>
You can use Typescript in both your React code (with `react-scripts` v2.1+) and your lambda functions )with `netlify-lambda` v1.1+). Follow these instructions:

1. `yarn add -D typescript @types/node @types/react @types/react-dom @babel/preset-typescript @types/aws-lambda`
2. convert `src/lambda/hello.js` to `src/lambda/hello.ts`
3. use types in your event handler:

```ts
import { Handler, Context, Callback, APIGatewayEvent } from 'aws-lambda';

interface HelloResponse {
  statusCode: number;
  body: string;
}

const handler: Handler = (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback
) => {
  const params = event.queryStringParameters;
  const response: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify({
      msg: `Hello world ${Math.floor(Math.random() * 10)}`,
      params
    })
  };

  callback(undefined, response);
};

export { handler };
```

rerun and see it work!

You are free to set up your `tsconfig.json` and `tslint` as you see fit.

</details>

**If you want to try working in Typescript on the client and lambda side**: There are a bunch of small setup details to get right. Check https://github.com/sw-yx/create-react-app-lambda-typescript for a working starter.

## Service Worker

The service worker does not work with lambda functions out of the box. It prevents calling the function and returns the app itself instead ([Read more](https://github.com/facebook/create-react-app/issues/2237#issuecomment-302693219)). To solve this you have to eject and enhance the service worker configuration in the webpack config. Whitelist the path of your lambda function and you are good to go.
>>>>>>> 6d12035127b6d25de76423fb35c46fe3dd605336
