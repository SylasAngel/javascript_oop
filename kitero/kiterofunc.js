/**
 * 
 * @param {string} name a diák neve
 */
function Student(name){ 
    this.name = name //a példány neve az lesz, amit megadunk paraméternek
    this.askedQuestionNum = 0

}
Student.prototype.askQuestion = function(){ //az objectnek létrehozunk egy függvényt
    console.log('???')
    this.askedQuestionNum++ //növeljük az askedquestionnum értékét 1-gyel
}
const firstSTu = new Student('Tyukodi') //példányosítunk
firstSTu.askQuestion() //meghívjuk az askQuestiont, a kérdéksekSzáma érték növelődik 1-gyel
const secondStu = new Student ('Zoli') //példányosítunk mégegyet

function StudentWithWork(name){ //új object
    Student.call(this,name)
    this.workDone = 0
}
StudentWithWork.prototype.DoWork = function()
{
    console.log('Inkrementálja a work done tulajdonságot')
    this.workDone++ //Inkrementálja a work done tulajdonságot
}
Object.setPrototypeOf(StudentWithWork.prototype,Student.prototype)
const ThirdStu = new StudentWithWork('Blastoise')
const FourthStu = new StudentWithWork('negyedik diák')
FourthStu.DoWork()
ThirdStu.askQuestion()

console.log(firstSTu) //kilogoljuk az első példányt
console.log(secondStu) //kilogoljuk a második példányt
console.log(ThirdStu)
console.log(FourthStu)
