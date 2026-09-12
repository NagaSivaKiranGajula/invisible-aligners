# Invisible Aligners — containerized hosting (client-rendered SPA mode).
# Build:  docker build -t invisible-aligners .
# Run:    docker run -p 8080:80 invisible-aligners

FROM oven/bun:1 AS build
WORKDIR /site
COPY package.json bun.lock ./
RUN bun install
COPY . .
RUN bun run build

FROM nginx:alpine
COPY --from=build /site/dist/client /usr/share/nginx/html

# Minimal static robots + sitemap so the container is crawlable.
RUN printf 'User-agent: *\nAllow: /\n' > /usr/share/nginx/html/robots.txt \
 && printf '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>\n' > /usr/share/nginx/html/sitemap.xml

COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]