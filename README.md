# Artifical Intelligence Monitoring & Management UI (AIMM-UI)

### The AI Monitoring & Management web app provides data-driven dashboards for AI-ML assets and task connections to Intuit products and services. Also provides lifecycle tracking, performance monitoring, and incident alerts for Intuit AI-ML service offerings

<br />

## Running App Locally

These instructions assume you have [Node](https://nodejs.org/en/) and npm installed. (app developed under Node v12.19.0)

1. After cloning / forking the repo and a 'cd' to be inside the project root, to install all the project libraries, run
<pre><code>$ npm install </code></pre>

2A. To run the app in development mode (on port: 3333), run

<pre><code>$ npm run dev </code></pre>

2B. To serve the app locally with the Express server,
first build the project to generate a static copy from the latest code:

<pre><code>$ npm run build</code></pre>

Then start the server (on port: 5555), by running

<pre><code>$ npm run serve</code></pre>
