# Web Page Analyzer Client

## Overview
This is the frontend component of the `Web Page Analyzer` written in [React](https://react.dev/).

It is tasked with reading tags of a given web page and generate a summary. The client calls a REST endpoint that accepts a URL and an array of HTML tag names.

The `OpenAPI` document of the RESTful interface can be found at [docs/api/openapi.yaml](https://github.com/kosatnkn/web-page-analyzer-api/blob/main/docs/api/openapi.yaml) of the [kosatnkn/web-page-analyzer-api](https://github.com/kosatnkn/web-page-analyzer-api) repository.

> **IMPORTANT**
>
> There are two more pieces to the solution.
> - Web Page Analyzer API, the backend component ([https://github.com/kosatnkn/web-page-analyzer-api](https://github.com/kosatnkn/web-page-analyzer-api))
> - Deployer, the IoC (infrastructure as code) component that enables single command deployment ([https://github.com/kosatnkn/web-page-analyzer-deploy](https://github.com/kosatnkn/web-page-analyzer-deploy))

## Running
There are two ways to run the service (**from source** or **from a Docker container**).

### Configuring
The only configuration value used is the **API_BASE_URL** which is in `web-page-analyzer-client/src/App.js` which tells the client the location of the **Web Page Analyzer API** service.

### Running From Source
Once you clone the repository and setup configurations use the following make command to run the client.
```bash
make run
```

### Run as a Docker Container
You can also run the client as a Docker container.

Use the following commands to build and spin-up the container.
```bash
make docker_run
```
> **NOTE:** This will build and tag the Docker image with `kosatnkn/web-page-analyzer-client:latest`(by default) and then run it. This behavior can be changed from the Makefile.

> **IMPORTANT:** The **Web Page Analyzer API** should be running and accessible.
