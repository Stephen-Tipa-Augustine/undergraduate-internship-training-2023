# KMC ERP DJANGO BACKEND

## Setup

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

## Development Server

Start the development server on `http://localhost:8000`

```bash
python manage.py runserver
```
In development environment ensure you have the 'media' directory created in your root repository.
