# danielrichter.dev

[![Netlify Status](https://api.netlify.com/api/v1/badges/56de848c-a85d-4258-bef7-9e1fa1530891/deploy-status)](https://app.netlify.com/sites/danielrichter/deploys)

My personal portfolio built with [Gatsby](https://www.gatsbyjs.org/) and hosted with [Netlify](https://www.netlify.com/).

This site is also used to generate my resume. A local script uses [Puppeteer](https://pptr.dev/) to build a PDF from the [resume](https://danielrichter.dev/resume/) page, which is built in React.

## 🚀 Quick start

1.  **Install Gatsby CLI**

    ```sh
    npm i -g gatsby-cli
    ```

2.  **Install dependencies**

    ```sh
    npm install
    ```

3.  **Start development server**

    ```sh
    gatsby develop
    ```

## 📁 Create PDF Resume

```sh
npm run build:resume
```

## 💫 Creating a production build

This site continuously deploys all commits to master via Netlify.
Production builds can be previewed by running the following commands:

```sh
gatsby build
gatsby serve
```
