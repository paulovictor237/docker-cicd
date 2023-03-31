FROM node:18-alpine
ENV PORT=3000

WORKDIR /app

COPY package.json ./
RUN npm install
COPY . . 


EXPOSE $PORT
# CMD  npm run dev
CMD  npm run build && npm run start