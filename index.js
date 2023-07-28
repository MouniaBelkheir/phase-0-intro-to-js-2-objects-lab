const employee = {
    name: "Emma",
    streetAddress: "Zone",
  };
  
  // Call the function being tested and assign the result to a new variable


  function updateEmployeeWithKeyAndValue(obj, key, value) {
    // Create a new object and copy all properties from the original employee
    const employees = { ...obj };
  
    // Add or update the key-value pair in the new employee object
    employees[key] = value;
  
    return employees;
  }
  
  // Function 1: Destructively update employee with the given key and value
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function 2: Delete key from a clone of employee and return the new employee (non-destructive)
  function deleteFromEmployeeByKey(employee, key) {
    // Create a new object and copy all properties from the original employee
    const updatedEmployee = { ...employee };
  
    // Delete the specified key from the new employee object
    delete updatedEmployee[key];
  
    return updatedEmployee;
  }
  
  // Function 3: Destructively delete key from the employee and return the updated employee
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the specified key from the original employee object
    delete employee[key];
  
    return employee;
  }
  