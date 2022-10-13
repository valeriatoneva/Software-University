
class Company {
    constructor(){
        this.departments = [];
        this.averageSalary = []
    }

    addEmployee(name, salary, position, department){
        if ([...arguments].some(a => a === null || a === undefined || a === '') || salary < 0) {
            throw new Error('Invalid input!');
        }
        this.departments.push(name)
        this.departments.push(department)
        return `New employee is hired. Name: ${name}. Position: ${position}`;
        
           let newEmploy = {
            username: username,
            salary: Number(salary),
            position: position
        }
    }
    
    bestDepartment(salary){
        this.averageSalary.push(salary);
            console.log(this.averageSalary)
        
    }
    

}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction")
console.log(c.bestDepartment());
