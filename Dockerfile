FROM nginx:alpine
LABEL author="Naveen Patancheru"
COPY ./dist /usr/share/nginx/html
EXPOSE 80 443
ENTRYPOINT ["nginx","-g","daemon off;"]