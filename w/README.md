# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### 安装

```
$ yarn
```

###  本地部署

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### 编译

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### 开发

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### 持续集成

某些 common defaults for linting/formatting have been set for you. If you integrate your project with an open source Continuous Integration system (e.g. Travis CI, CircleCI), you may check for issues using the following command.

```
$ yarn ci
```
### 版本
### 版本\
### 版本