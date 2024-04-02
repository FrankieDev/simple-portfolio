import { defineDb, defineTable, column, NOW } from 'astro:db'

const Contact = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    email: column.text(),
    message: column.text(),
    created: column.date({ default: NOW })
  }
})

export default defineDb({
  tables: { Contact }
})
