#DockerFile is used to build a docker image from your app
#usually a jenkins server reads this file and does the build automatically
#The base image of the app
FROM node:17-alpine

#RUN: execute any linux command in the container
#the /home/app will be created in the container
RUN mkdir -p /home/app

#COPY: executes on the host
COPY . /home/app

#CMD: executes an entry point linux command 
##Inside a DockerFile, we can have only one CMD but multiple RUN
CMD ["node","/home/app/index.js"]