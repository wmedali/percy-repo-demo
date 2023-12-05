FROM cypress/base:20.9.0
COPY . /tests
WORKDIR /tests
RUN npm install
CMD ["npx", "cypress", "run"]