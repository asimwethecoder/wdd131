let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];

let namesB = names.filter(name => name.charAt(0) === 'B');
let nameLengths = names.map(name => name.length);
let averageLength = names.reduce((total, name) => total + name.length, 0) / names.length;

document.querySelector('#names').textContent = names.join(', ');
document.querySelector('#namesB').textContent = namesB.join(', ');
document.querySelector('#lengths').textContent = `[${nameLengths.join(', ')}]`;
document.querySelector('#average').textContent = averageLength;
