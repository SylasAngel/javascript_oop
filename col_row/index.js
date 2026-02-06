import data from './data.json' with {type: 'json'}
import {Manager} from './manager.js'
import { Table } from './table.js'

const manager = new Manager()
const tableTest = new Table(data.colspanHeaderArray,manager)
manager.addCallBack = (element) => {console.log(element)}
for(const e of data.colspanDataArr){
    manager.addElement(e)
}