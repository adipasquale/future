strapi-install:
	cd strapi && npm install

strapi-dev:
	cd strapi && npm run develop

strapi-deploy:
	cd strapi && fly deploy
