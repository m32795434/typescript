"use strict";
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 0] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 1] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 2] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
;
let employee = {
    name: "Manuel",
    surname: "Bravard",
    prof: "Tec. Developer",
    contractStatus: ContractStatus.Temp
};
console.log(ContractStatus);
console.log(employee);
