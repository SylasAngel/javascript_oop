const muvelet = (a,b,callback) =>{
    const result = callback(a,b)
    return {result}} //arrowfunctionos függvény, harmadik paraméter callback
const muveletLetrehoz = (jel)=>{ //HigherOrderFunction, függvény függvénnyel tér vissza, HoF
    if(jel == '+'){
        return (a,b)=> {return a+b} //returnol arrowfunctionnel ami összeadja a 2 paramétert
    }
}
export {muvelet,muveletLetrehoz}