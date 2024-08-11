# ref: https://bytes.usc.edu/cs104/wiki/makefile
.PHONY: run test build docker_build

# Runs the app in the development mode.
# Open http://localhost:3000 to view it in your browser.
# The page will reload when you make changes.
# You may also see any lint errors in the console.
run:
	npm start

docker_run: docker_build
	docker run --name web-page-analyzer-client --rm -p 3000:80 kosatnkn/web-page-analyzer-client:latest

# Launches the test runner in the interactive watch mode.
# See the section about running tests (https://facebook.github.io/create-react-app/docs/running-tests) for more information.
test:
	npm test

# Builds the app for production to the `build` folder.
# It correctly bundles React in production mode and optimizes the build for the best performance.
# The build is minified and the filenames include the hashes.
# Your app is ready to be deployed!
# See the section about deployment (https://facebook.github.io/create-react-app/docs/deployment) for more information.
build:
	npm run build

docker_build:
	docker build --tag kosatnkn/web-page-analyzer-client:latest .
