import nedb from 'nedb-promises'

const db = nedb.create({ autoload: true, filename: 'data/dev.db' })

export { db }