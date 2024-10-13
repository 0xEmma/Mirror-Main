FROM node:18-alpine
COPY . /app
WORKDIR /app

RUN npm install
RUN npm run build
EXPOSE 3000

ENV PORT=3000

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
ENV HOSTNAME="0.0.0.0"
CMD ["npm", "run", "start"]