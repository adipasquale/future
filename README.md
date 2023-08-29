# Future

yarn develop

```mermaid

```

# deployment on Fly

create a volume future_data


```sh
fly secrets set APP_KEYS=$(openssl rand -base64 32) \
  API_TOKEN_SALT=$(openssl rand -base64 32) \
  ADMIN_JWT_SECRET=$(openssl rand -base64 32) \
  JWT_SECRET=$(openssl rand -base64 32) \
  NODE_ENV=production \
  DATABASE_CLIENT=sqlite \
  DATABASE_PATH=/data/future.db \
  CLOUDINARY_NAME=outofscreen \
  CLOUDINARY_KEY=123456789 \
  CLOUDINARY_SECRET=-abcdefghijklmnop
```
