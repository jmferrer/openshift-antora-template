FROM quay.io/jmferrer/antora

RUN npm install http-server -g


ADD ./site.yml /antora/site.yml

RUN [[ -z "${gitusername}" ]] || sed -i "s,://git,://$gitusername:$gitpassword@git,g" /antora/site.yml

RUN antora /antora/site.yml; rm /antora/site.yml

EXPOSE 8080

ENTRYPOINT [ "" ]
CMD [ "http-server", "/antora/build/site/" ]

