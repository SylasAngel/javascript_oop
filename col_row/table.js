import { Manager } from "./manager.js"

class Table{
    /**
     * @type {HTMLTableSectionElement}
     */
    #tbody
    /**
     * @type {Manager}
     */
    #manager
    /**
     * 
     * @param {HeaderArrayType} headerArray 
     * @param {Manager} manager 
     */
    constructor(headerArray,manager){
        const table = document.createElement('table')
        document.body.appendChild(table)
        const thead = document.createElement('thead')
        table.appendChild(thead)
        const tr = document.createElement('tr')
        thead.appendChild(tr)
        for(const e of headerArray){
            const cell = document.createElement('th')
            tr.appendChild(cell)
            cell.innerText = e.name
            if(e.colspan == 2){
                cell.colSpan = 2
            }
        }
        const tbody = document.createElement('tbody')
        table.appendChild(tbody)
        this.#tbody = tbody
    }
}
export {Table}