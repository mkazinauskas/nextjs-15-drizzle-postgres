This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

1. Install dependencies

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

2. Create a `.env` file in the root directory and add the following:

```bash
DATABASE_URL=postgres://postgres:postgres@localhost:5432/postgres
```

3. Run migration scripts

```bash
npm run db:migrate
# or
yarn db:migrate
# or
pnpm db:migrate
# or
bun db:migrate
```

4. Start the development server

```bash
docker-compose up -d && npm run dev
# or
docker-compose up -d && yarn dev
# or
docker-compose up -d &&pnpm dev
# or
docker-compose up -d && bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
