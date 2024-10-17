<!-- PROJECT LOGO -->
<br/>
<div align="center">
    <a>
        <img src="https://github.com/easycode002/data-catalog/blob/main/apps/dashboard-app/public/data-catalog-logo.png" atl="Logo" width="80" heigt="80">
    </a>
    <h3 align="center">Data Catalog</h3>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project
The **Data Catalog** project aims to create a powerful and flexible platform that enables users to import data from a variety of sources. Designed to streamline the data handling process, this project facilitates seamless integration and transformation of data through efficient ETL (Extract, Transform, Load) operations.

After the data is imported, users can perform complex transformations, ensuring the data is clean and well-structured for analysis. Furthermore, the platform offers robust visualization capabilities, allowing users to generate insightful reports and dashboards that enhance data comprehension and decision-making. <a href="https://www.canva.com/design/DAGTzDnHawQ/2JBtETJeB0TfmO9HQmRSuQ/edit?utm_content=DAGTzDnHawQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank">Data Catalog</a>!

## Our vision
Empower organizations to unlock the full potential of their data by providing a seamless, integrated platform for data import, processing, and visualization, enabling informed decision-making and fostering a data-driven culture.<a href="https://www.canva.com/design/DAGTzv4tp3s/Qef3kyMRjZgqMcdVomCUzw/edit?utm_content=DAGTzv4tp3s&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank">Product Vision Board</a>

## Our mission
To simplify data management by enabling users to effortlessly import, transform, and visualize data from various sources, facilitating insights and informed decision-making for businesses and individuals alike.

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>

## UI design
- [![Static Badge](https://img.shields.io/badge/Figma-2C2D34?style=for-the-badge&logo=figma&logoColor=fff&color=%232C2D34)](https://www.figma.com/design/crMDtSSVv5vX7sIZc8jCWN/Team-Project-Check-Me?node-id=205-108&t=fR3Ai4jI02tEYQvX-0)

<p align="right">(<a href="#readme-top">Back to Top</a>)</p>

### Built With
This section we lists all library and framework that make this project
- [![Next][Next.js]][Next-url]
- [![Static Badge](https://img.shields.io/badge/Node.js-499442?style=for-the-badge&logo=node.js&logoColor=fff&color=499442)](https://nodejs.org/en)
- [![Static Badge](https://img.shields.io/badge/Tyscript-3178C6?style=for-the-badge&logo=typescript&logoColor=fff&color=3178C6)](https://www.typescriptlang.org/)
- [![Static Badge](https://img.shields.io/badge/Express.js-000?style=for-the-badge&logo=express&logoColor=fff&color=000)](https://expressjs.com/)
- [![Static Badge](https://img.shields.io/badge/Mongodb-%23023430?style=for-the-badge&logo=mongodb&logoColor=fff&color=%23023430)](https://www.mongodb.com/)


### Project Structure
<p>The project follows a microservices architecture within a monorepo setup. Below is an overview of the directory structure and the purpose of each component:</p>

```bash
Data-Catalog
.
├── apps
│   ├── backend
│   │   ├── api-sample
│   │   │   ├── build-script.js
│   │   │   ├── Dockerfile.dev
│   │   │   ├── Dockerfile.local
│   │   │   ├── ecosystem.config.js
│   │   │   ├── ecosystem.local.config.js
│   │   │   ├── nodemon.json
│   │   │   ├── package.json
│   │   │   ├── src
│   │   │   │   ├── app.ts
│   │   │   │   ├── configs
│   │   │   │   ├── config.ts
│   │   │   │   ├── controllers
│   │   │   │   │   └── product.controller.ts
│   │   │   │   ├── docs
│   │   │   │   │   └── swagger.json
│   │   │   │   ├── routes
│   │   │   │   │   └── v1
│   │   │   │   │       └── routes.ts
│   │   │   │   └── server.ts
│   │   │   ├── tsconfig.json
│   │   │   └── tsoa.json
│   │   ├── auth-service
│   │   │   ├── build-script.js
│   │   │   ├── Dockerfile.dev
│   │   │   ├── Dockerfile.local
│   │   │   ├── ecosystem.config.js
│   │   │   ├── ecosystem.local.config.js
│   │   │   ├── nodemon.json
│   │   │   ├── package.json
│   │   │   ├── src
│   │   │   │   ├── app.ts
│   │   │   │   ├── configs
│   │   │   │   ├── config.ts
│   │   │   │   ├── controllers
│   │   │   │   │   └── product.controller.ts
│   │   │   │   ├── docs
│   │   │   │   │   └── swagger.json
│   │   │   │   ├── routes
│   │   │   │   │   └── v1
│   │   │   │   │       └── routes.ts
│   │   │   │   └── server.ts
│   │   │   ├── tsconfig.json
│   │   │   └── tsoa.json
│   │   ├── docker-compose.dev.yml
│   │   └── docker-compose.local.yml
│   ├── client-app
│   │   ├── app
│   │   │   ├── globals.css
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── next.config.mjs
│   │   ├── next-env.d.ts
│   │   ├── package.json
│   │   ├── postcss.config.mjs
│   │   ├── README.md
│   │   ├── tailwind.config.ts
│   │   └── tsconfig.json
│   └── dashboard-app
│       ├── eslint.config.js
│       ├── index.html
│       ├── package.json
│       ├── postcss.config.js
│       ├── public
│       │   ├── data-catalog-logo.png
│       │   └── vite.svg
│       ├── README.md
│       ├── src
│       │   ├── App.tsx
│       │   ├── index.css
│       │   ├── main.tsx
│       │   └── vite-env.d.ts
│       ├── tailwind.config.js
│       ├── tsconfig.app.json
│       ├── tsconfig.json
│       ├── tsconfig.node.json
│       └── vite.config.ts
├── package.json
├── packages
│   ├── libs
│   │   ├── babel.config.json
│   │   ├── note.txt
│   │   ├── package.json
│   │   ├── README.md
│   │   ├── scripts
│   │   │   ├── babel-preset.js
│   │   │   └── build-package.js
│   │   ├── src
│   │   │   ├── constants
│   │   │   │   ├── app-error-message.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── status-code.ts
│   │   │   ├── index.ts
│   │   │   ├── types
│   │   │   │   ├── auth.interface.ts
│   │   │   │   ├── common.interface.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── user.interface.ts
│   │   │   └── utils
│   │   │       ├── errors.ts
│   │   │       ├── index.ts
│   │   │       └── logger.ts
│   │   ├── tsconfig.json
│   │   └── yarn.lock
│   └── ui-components
│       ├── eslint.config.js
│       ├── index.html
│       ├── index.ts
│       ├── package.json
│       ├── postcss.config.js
│       ├── public
│       │   └── vite.svg
│       ├── README.md
│       ├── src
│       │   ├── App.tsx
│       │   ├── components
│       │   │   ├── atoms
│       │   │   │   ├── Button.tsx
│       │   │   │   └── Input.tsx
│       │   │   ├── molecules
│       │   │   ├── organisms
│       │   │   ├── pages
│       │   │   └── templates
│       │   ├── index.css
│       │   ├── main.tsx
│       │   └── vite-env.d.ts
│       ├── tailwind.config.js
│       ├── tsconfig.app.json
│       ├── tsconfig.json
│       ├── tsconfig.node.json
│       ├── vite.config.ts
│       ├── webpack.config.js
│       └── webpack.config.ui.js
├── README.md
├── scripts
│   ├── data-catalog.pem
│   └── setup-environment.sh
└── yarn.lock
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To run the project, ensure you have the following installed on your system:

- [![Static Badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=fff)](https://nodejs.org/)
- [![Static Badge](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=fff)](https://yarnpkg.com/)

Then, follow these steps:

<h3>Frontend</h3>

Open your terminal and run the following command to clone the project repository:

```sh
git clone https://github.com/sabaicode-dev/check-me.git

```

2. Navigate to the Project Directory:

```sh
cd check-me
```

3. Install Dependencies:

Navigate to the root directory of the project and run:

```sh
yarn install
```

4. Start the Project:

Use the following command to start all application:

```sh
yarn start
```

5. Click link in your terminal:

Use the following command to start all application:

<a href="http://localhost:3000/">localhost:3000</a>

<h3>Backend</h3>

1. Clone the Repository:

Open your terminal and run the following command to clone the project repository:

```sh
git clone https://github.com/sabaicode-dev/check-me.git

```

2. Navigate to the Project Directory:

```sh
cd check-me
```

3. Install Dependencies:

Navigate to the root directory of the project and run:

```sh
yarn install
```

4. Start the Project:

Use the following command to start all services

```sh
yarn start
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

CheckMe<br/>
Team members<br/> vannbonath1@gmail.com <br/> nhamchamnes@gmail.com <br/> info.thoeurnbunthorn@gmail.com <br/> chhornsreyproek@gmail.com

Project Link: [https://github.com/sabaicode-dev/check-me](https://github.com/sabaicode-dev/check-me)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com