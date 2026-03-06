import { createRadioButton } from "./gomszab.min.js";
import { ViewElement } from "./viewelement.js";
class NavBar extends ViewElement{
    /**
     * @type {ViewElement[]}
     */
    #viewElementList;
    constructor(){
        super('navbar');
        this.div.addEventListener('change', (e) =>{
            const selectedRadioButton = e.target.value;
            this.activate(selectedRadioButton)
            //az activate meghívása
        })
        this.#viewElementList =[];
    }
    /**
     * 
     * @param {string} label 
     * @param {ViewElement} ViewElement 
     */
    addViewElement(label,viewElement){
        this.#viewElementList.push(viewElement)
        const div = createRadioButton({id: viewElement.id, name: this.id, label})
        this.div.appendChild(div)
    }

    /**
     * @override
     * @param {string} value 
     */
    activate(value){
        this.div.querySelector(`#${value}`).checked = true
        for(const viewElement of this.#viewElementList){
            viewElement.activate(value)
        }
    }
}

export {NavBar}