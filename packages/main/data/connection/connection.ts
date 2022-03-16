import { join } from 'path'
import nedb from 'nedb-promises'


const db = nedb.create({ autoload: true, filename: 'data/dev.db' })
console.log(join(__dirname, './dev.db'));

const init = async () => {
  db.insert({ name: 'foo' })
  console.log('hola');

}
init()

export { db }