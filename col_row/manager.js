/**
 * @import { FormFieldType, HeaderArrayType, ColspanType, RowspanType  } from "./functions.js" //importáljuk az adattípusokat
 */
/**
 * @callback addCallBack
 * @param {ColspanType | RowspanType} element
 * @returns {void}
*/
class Manager{
    /**
     * @type {ColspanType [] | RowspanType []}
     */
    #dataArray

    /**
     * @type {addCallBack}
     */
    #addCallback
    constructor(){
        this.#dataArray = []
    }
    /**
     * @param {ColspanType | RowspanType} item 
     */
    addElement(item){
        this.#dataArray.push(item)
        if(this.#addCallback){
            this.#addCallback(item)
        }
    }
    /**
     * @param {ColspanType | RowspanType}
     */
    set addCallBack(element){
        this.#addCallback = element
    }
}
export{Manager}