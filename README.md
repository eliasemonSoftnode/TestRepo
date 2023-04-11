# Quick Start Guide of : Booklab

### Step to start the coding

This is a monorepo managed with Lerna that contains a frontend Next.js TypeScript project and a backend Express TypeScript Project.

Before following these steps make sure you have node version **_ >= 18.0.0 <= 18.15.0 _** and NPM version **_>=8.0.0 <= 8.19.2 _** installed in your local machine.

1. Clone the repo
2. After cloning the repo go the project's root directory
3. Open the terminal and type this command to install all required dependencies for our application

```sh
yarn workspace:setup
```

4. After successful installtion of the dependencies please type this command in the terminal to run our project in development mode

```sh
yarn dev
```

5. **_ OPTIONAL _** If you want to run a single package seperately, please type this command in the terminal to run a single package in development mode

```sh
yarn dev --scope=[package_name]
```

### Our commit message should be as follows. Here footer is optional:

##_reference:_\*\* [Conventional Commit Message ✅] (https://www.conventionalcommits.org/en/v1.0.0)

```sh
feat(user): add login functionality

This commit adds the ability for users to log in to the application.

This commit also fixes a bug with the registration form.

Fixes #123
```

### The type is mandatory and determines the intent of change. Here are possible values:

- build: changes affecting build systems or external dependencies
- ci: updating configuration files for continuous integration and deployment services
- chores: updating grunt tasks etc.; no production code change
- docs: documentation-only changes
- feat: a new feature
- fix: a bug fix
- perf: a code change that improves performance
- refractor: a code change that neither fixes a bug nor adds a feature
- style: changes that do not affect the meaning of the code (white-space, formatting, missing semicolons, etc)
- test: adding missing tests or correcting existing tests
