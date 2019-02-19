FROM antora/antora

RUN npm install http-server -g

ADD ./site.yml /antora/site.yml
RUN antora /antora/site.yml

EXPOSE 8080

ENTRYPOINT [ "" ]
CMD [ "http-server", "/antora/build/site/" ]

