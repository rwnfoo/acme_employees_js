const employees = [
  { id: 1, name: 'moe'},
  { id: 2, name: 'larry', managerId: 1},
  { id: 4, name: 'shep', managerId: 2},
  { id: 3, name: 'curly', managerId: 1},
  { id: 5, name: 'groucho', managerId: 3},
  { id: 6, name: 'harpo', managerId: 5},
  { id: 8, name: 'shep Jr.', managerId: 4},
  { id: 99, name: 'lucy', managerId: 1}
]

const findEmployeeByName = (string, array) => {
  const result = array.filter(elem => elem.name === string)
  return result[0]
}

//console.log(findEmployeeByName('moe', employees))

function findManagerFor (func,array) {
  let managerId = func.managerId
  const manager = array.filter(elem => elem.id === managerId)
  return manager[0]
}

//console.log(findManagerFor(findEmployeeByName('shep Jr.', employees), employees));//{ id: 4, name: 'shep', managerId: 2 }

const findCoworkersFor = (func,array) => {
  let coworkersManagerId = func.managerId
  const coworkers = array.filter(elem => elem.managerId === coworkersManagerId)
  console.log(coworkers)
}

//console.log(findCoworkersFor(findEmployeeByName('larry', employees), employees));

const findManagementChainForEmployee = (func,array) => {
  let chain = []
  let managerObj = findManagerFor(func,array)

  while (managerObj!== undefined){
    chain.push(managerObj)
    let managerName = managerObj.name
    managerObj = findManagerFor(findEmployeeByName(managerName, employees), employees)
  }
  return chain.reverse()
}

// console.log(findManagementChainForEmployee(findEmployeeByName('shep Jr.', employees), employees))

const generateManagementTree = (array) => {
  let bossArray = array.filter(employeeObj => employeeObj.managerId === undefined);
  let topBoss = bossArray[0];

  topBossId = topBoss.id
  const subordinates = array.filter(elem => elem.managerId === topBossId)
  topBoss.reports = subordinates


}

console.log(JSON.stringify(generateManagementTree(employees), null, 2))

function displayReports(obj,prefixstring){
  console.log(prefixstring+obj)
  const reports = obj.reports
  reports.forEach(report => displayReports(report, prefixstring+"-"))
}