## About Project

MEAN stack

This is a simple web application to show my adaptation skills on an assignment.

To get it working, follow these steps.

1. Run commands below:

    ```
    gh repo clone aliilkertopcu/lotr-assignment
    cd ./lotr-assignment/api
    npm install
    cd ./lotr-assignment/frontend
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

![lotr-assignment](https://user-images.githubusercontent.com/5613150/151759275-125d65f3-45b7-4901-b656-3d71c22df7db.gif)

It may fail at the first run, sometimes MongoDB and express can't be opened at the same time. If that happened just terminate the process, and compose up again.

If you fork this project and try to expand / shape it to your needs, especially adding new libraries will be unable to used till you `docker-compose -f '.\docker-compose.debug.yml' down --rmi local` and `docker-compose -f '.\docker-compose.debug.yml' up` again.

- [x] convert var statements to let / const at some points
- [x] error handling if-else structure is not optimal and faulty
- [x] use const at server.js
- [x] put usage gif
- [ ] deletion of unused libraries
- [ ] ugly search button
- [ ] /(optional) give the cards to quote (:
