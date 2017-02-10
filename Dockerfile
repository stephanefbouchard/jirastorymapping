FROM    node

# Create writable directories
RUN     mkdir /expresso

COPY    . /expresso

WORKDIR /expresso

RUN     npm install

EXPOSE  8080

CMD     ["npm", "run", "dev"]

