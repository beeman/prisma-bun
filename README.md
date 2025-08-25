# prisma-bun

Simple modern Prisma setup with Bun to run Prisma commands and seed.

## Installation

Copy the `.env` file

```bash
cp .env.example .env
```

Install the dependencies:

```bash
bun install
```

## Usage

To push the database without migration:

```bash
bun run db push
```

Run the seed manually:

```bash
bun run db seed
```

## Migrations

Create the initial migration:

```bash
bun run db:migrate dev -n init
```

Use migrate reset to iterate over the seed in `./src/prisma/seed.ts`:

```bash
bun run db:migrate reset
```

## Application

Implement your application logic in `./src/index.ts`

```bash
bun dev # start the dev server
bun run build # build to dist
bun start # start the dist
```

## Database

The default db is SQLite, switch to Postgres by changing `prisma/schema/schema.prisma`:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("POSTGRES_URL")
}
```

There is a `compose.yml` with a Docker server and there are `services:` scripts in package.json.
