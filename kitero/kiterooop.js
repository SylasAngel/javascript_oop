class Student{
    constructor(name){
        this.name = name
        this.askedQuestionsNum = 0
    }
    askQuestion(){
        console.log('???')
        this.askedQuestionsNum++
    }
}


const FirstStu = new Student('Zoli')
FirstStu.askQuestion()
console.log(FirstStu)

class StudentWithWork extends Student{
    constructor(name){
        super(name)
        this.workDone = 0
    }
    DoWork(){
        console.log('Munka elvégezve')
        this.workDone++
    }
}

const secondStu = new StudentWithWork('Tyukodi')
secondStu.DoWork()
console.log(secondStu)
