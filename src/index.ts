interface Employee {
    name: string,
    surname: string,
    prof: string,
    contractStatus: ContractStatus
}
enum ContractStatus {
    Permanent, Temp, Apprentice
};
let employee: Employee = {
    name: "Manuel",
    surname: "Bravard",
    prof: "Tec. Developer",
    contractStatus: ContractStatus.Temp
}
console.log(ContractStatus)
console.log(employee);
