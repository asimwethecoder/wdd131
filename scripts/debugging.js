const radiusOutput = document.getElementById('radius');
const areaOutput = document.querySelector('#area'); // Fixed missing ID selector '#'

let area = 0;
const PI = 3.14159; // Fixed syntax error (== to =)
let radius = 10;   // Changed from const to let so it can be reassigned

area = PI * radius * radius; // Fixed missing multiplication operators
radiusOutput.textContent = radius; // Fixed assignment error by using textContent
areaOutput.textContent = area;     // Fixed assignment error by using textContent

radius = 20;
area = PI * radius * radius; // Fixed missing multiplication operators
radiusOutput.textContent = radius;
areaOutput.textContent = area;