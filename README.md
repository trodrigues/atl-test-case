Test case for a bug in awesome-typescript-loader.

To run:

* `npm install`
* `npm start`
* Error occurs

If only `tsc` is run, the `build` directory should contain the compiled file.

To run with no problems:

* `npm install typescript@2.2.2`
* `npm start`
* Open http://localhost:3010/app.js and you should see the compiled file.