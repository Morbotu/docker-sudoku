FROM node:12-alpine
WORKDIR /sudoku-app
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]