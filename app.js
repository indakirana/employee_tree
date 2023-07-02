const fs = require('fs')

fs.readFile('./input.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err)
        return
    }
    try {
        var data = JSON.parse(jsonString);

        var output = "";
        var projectName;
        var employeeHierarchies = [];
        var employeeName;
        var directReports = [];

        for (var i = 0; i<data.length; i++) {
            projectName = data[i].projectName;

            employeeHierarchies = data[i].employeeHierarchies;

            for (var j = 0; j<employeeHierarchies.length; j++) {
                employeeName = employeeHierarchies[j].employeeName;

                directReports = employeeHierarchies[j].directReports;
                    
                    output += projectName + '\n manager : ' + employeeName + '\n subordinate : ' + directReports +'\n';
            }
        }

        console.log(output);
        
    } catch(err) {
        console.log('Error parsing JSON string:', err)
    }
    //console.log('File data:', jsonString) 
})
