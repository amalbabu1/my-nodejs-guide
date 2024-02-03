# MY NODE JS GUDE

The guide is based on the repo:
https://github.com/goldbergyoni/nodebestpractices?tab=readme-ov-file#1-project-architecture-practices

## setup the typescript, nodemon

    tsc --init

## setup the docker

    create Dockerfile
    create .dockerignore

    build container
    docker build -t nodejs-guide-app .

    run container
    docker run -d -p3000:3000 nodejs-guide-app

    list container
    docker ps -a

    delete container
    docker rm <container>

    list images
    docker image list

    delete image
    docker rmi <image>
