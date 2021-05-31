# Agenda App for CareerFoundry

Agenda App is a react app for scheduling a call with the mentors

## Installation

You can use git to copy the project into your local folder.

```bash
git clone https://github.com/ermyas7/Agenda
```
Navigate into the project's working directory.

```bash
cd Agenda
```

Use the package manager npm to install dependencies.

```bash
npm install
```
Use JSON Server globally package to simulate APIs and databases.

```bash
npm install -g json-server
```

## How to run
Start JSON Server on port 4040 inside the working directory

```bash
json-server --watch db.json --port 4040
```
Start the web application
```bash
npm start
```
## API Usage

```
list of all mentors
GET http://localhost:4040/mentors

mentor detail with a list of available slot
GET http://localhost:4040/mentors/id

add a new mentor
POST http://localhost:4040/mentors

update mentor data
PUT | PATCH http://localhost:4040/mentors/id
```
## License
[MIT](https://choosealicense.com/licenses/mit/)