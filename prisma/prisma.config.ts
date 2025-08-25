import type { PrismaConfig } from 'prisma'

export default {
  schema: 'schema',
  migrations: {
    path: 'migrations',
    seed: './prisma/seed.ts',
  },
} satisfies PrismaConfig
