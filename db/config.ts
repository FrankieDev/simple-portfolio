import { defineDb, defineTable, column } from 'astro:db'

const Contact = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    email: column.text(),
    message: column.text()
  }
})

export default defineDb({
  tables: { Contact }
})
