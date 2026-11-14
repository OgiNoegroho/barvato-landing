# syntax=docker/dockerfile:1

FROM node:24-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ARG PUBLIC_SITE_URL=http://localhost:4321
ARG PUBLIC_APP_LOGIN_URL=http://localhost:3000
ARG PUBLIC_TRIAL_CTA_URL=http://localhost:3000/#register
ARG PUBLIC_CONTACT_URL=mailto:hello@barvato.com

ENV PUBLIC_SITE_URL=$PUBLIC_SITE_URL \
    PUBLIC_APP_LOGIN_URL=$PUBLIC_APP_LOGIN_URL \
    PUBLIC_TRIAL_CTA_URL=$PUBLIC_TRIAL_CTA_URL \
    PUBLIC_CONTACT_URL=$PUBLIC_CONTACT_URL

RUN npm run build

FROM nginxinc/nginx-unprivileged:1.27-alpine AS runtime
COPY --chown=101:101 nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder --chown=101:101 /app/dist /usr/share/nginx/html

EXPOSE 8080
USER 101

HEALTHCHECK --interval=10s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/_health >/dev/null || exit 1

CMD ["nginx", "-g", "daemon off;"]
