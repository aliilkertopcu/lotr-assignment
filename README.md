## About Project

MEAN stack

This is a simple web application to show my adaptation skills on a job interview assignment.

To get it working, follow these steps.

1. Run commands below:

    ```
    gh repo clone aliilkertopcu/lotr-assignment
    cd ./lotr-assignment/api
    npm install
    ```
2. Rename '.env.example' file in the /api directory, to '.env' and enter your API key
    ```
    THE_ONE_API_KEY = <your api key>
    THE_ONE_API_URL = https://the-one-api.dev/v2
    ```
3. Start docker ([install](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe) it if not)
4. Run `docker-compose -f '.\docker-compose.debug.yml' up`

Voila!

It may be fail at the first run, sometimes MongoDB and express cant be opened at the same time. If that happened just terminate the process, and compose up again.

If frontend doesn't load properly, you may need to go `./lotr-assignment/frontend` and run `npm install` there too.

If you fork this project and try to expand / shape it to your needs, especially adding new libraries will be unable to used till you `docker-compose -f '.\docker-compose.debug.yml' down --rmi local` and `docker-compose -f '.\docker-compose.debug.yml' up` again.

toDo:
- convert var statements to let / const at some points
- error handling if-else structure is not optimal and faulty
- use const at server.js
