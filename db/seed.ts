import { db, Contact } from 'astro:db'

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Contact).values([
    {
      name: 'Alice',
      email: 'frank@fadom.pro',
      message: 'Hello, World!'
    },
    {
      name: 'Bob',
      email: 'testqtesting.com',
      message: 'Hello, World!'
    }
  ])
}
