## About Project

MEAN stack

This is a simple web application to show my adaptation skills on a job interview assignment.

To get it working, follow these steps.

1. Run commands below:

    ```
    gh repo clone aliilkertopcu/lotr-assignment
    cd /lotr-assignment
    cd /frontend
    npm install
    cd ..
    cd /api
    npm install
    ```
2. Rename '.env.example' file in the /api directory, to '.env' and enter your API key
    ```
    THE_ONE_API_KEY = <your api key>
    THE_ONE_API_URL = https://the-one-api.dev/v2
    ```
3. Start docker ([install](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe) it if not)
4. Run `docker-compose -f '.\docker-compose.debug.yml' up`

Voila! It will probably take ~10 minutes (or my PC is slow).

If you fork this project and try to expand / shape it to your needs, especially adding new libraries will be unable to used till you `docker-compose -f '.\docker-compose.debug.yml' down --rmi local` and `docker-compose -f '.\docker-compose.debug.yml' up` again.
