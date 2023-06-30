# Fullstack Application With Vue and Django



# Django Rest API
## Django Setup

You are recommended to use a virtual environment to run this app, the system Python interpreter shall be still fine.

The application is currently using the sqlite3 built-in Python database, in Production please go for MySQL, Postgres, or Oracle which allows for authenticated queries. You can make this configurations in the settings.py file.

The Original application was created in Python 3.10

```bash
# create virtual environment
python -m venv my-venv

# install requirements
pip install -r ./requirements.txt


# make database migrations
python manage.py makemigrations

# create database tables
python manage.py migrate


# create admin user
python manage.py createsuperuser
```

## Django Development Server

Start the development server on `http://localhost:8000`

```bash
python manage.py runserver
```
In development environment ensure you have the 'media' directory created in your root repository.





# Vue Frontend Application

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
