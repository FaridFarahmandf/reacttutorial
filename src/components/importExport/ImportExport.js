const name = 'Farid Farahmand' ;
class Course {
    constructor(courseName , hours , teacher) {
        this.courseName = courseName ;
        this.hours = hours ; 
        this.teacher = teacher ; 
    }
    showInfo(){
        return `${this.courseName} would thought for ${this.hours} hours by ${this.teacher}`
    }
}
export {name} ;
export default Course ;