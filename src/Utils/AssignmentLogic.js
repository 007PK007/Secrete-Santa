export function generateSecretSanta(employees, lastYear) {
    const lastYearMap = {};
    lastYear.forEach(entry => {
      if (entry.Employee_EmailID && entry.Secret_Child_EmailID) {
        lastYearMap[entry.Employee_EmailID] = entry.Secret_Child_EmailID;
      }
    });
  
    const isValid = (giver, candidate) =>
      giver.Employee_EmailID !== candidate.Employee_EmailID &&
      lastYearMap[giver.Employee_EmailID] !== candidate.Employee_EmailID;
  
    const MAX_ATTEMPTS = 100;
    for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
      const pool = [...employees].sort(() => Math.random() - 0.5);
      const result = [];
      const used = new Set();
  
      const backtrack = (index) => {
        if (index === employees.length) return true;
        const giver = employees[index];
        for (let child of pool) {
          if (!used.has(child.Employee_EmailID) && isValid(giver, child)) {
            result.push({
              Employee_Name: giver.Employee_Name,
              Employee_EmailID: giver.Employee_EmailID,
              Secret_Child_Name: child.Employee_Name,
              Secret_Child_EmailID: child.Employee_EmailID,
            });
            used.add(child.Employee_EmailID);
            if (backtrack(index + 1)) return true;
            used.delete(child.Employee_EmailID);
            result.pop();
          }
        }
        return false;
      };
  
      if (backtrack(0)) return { success: true, assignments: result };
    }
  
    return { success: false, error: "No valid assignment possible after multiple attempts." };
  }
  