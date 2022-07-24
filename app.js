// https://www.omnicalculator.com/physics/gravitational-force

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const gravitationalForceRadio = document.getElementById('gravitationalForceRadio');
const mass1Radio = document.getElementById('mass1Radio');
const mass2Radio = document.getElementById('mass2Radio');
const distanceRadio = document.getElementById('distanceRadio');

const G = 6.674e-11;
let gravitationalForce;
let mass1 = v1;
let mass2 = v2;
let distance = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

gravitationalForceRadio.addEventListener('click', function() {
  variable1.textContent = '(M) Mass 1 (kg)';
  variable2.textContent = '(m) Mass 2 (kg)';
  variable3.textContent = '(R) Distance (m)';
  mass1 = v1;
  mass2 = v2;
  distance = v3;
});

mass1Radio.addEventListener('click', function() {
  variable1.textContent = '(F) Gravitational force (N)';
  variable2.textContent = '(m) Mass 2 (kg)';
  variable3.textContent = '(R) Distance (m)';
  gravitationalForce = v1;
  mass2 = v2;
  distance = v3;
});

mass2Radio.addEventListener('click', function() {
  variable1.textContent = '(F) Gravitational force (N)';
  variable2.textContent = '(M) Mass 1 (kg)';
  variable3.textContent = '(R) Distance (m)';
  gravitationalForce = v1;
  mass1 = v2;
  distance = v3;
});

distanceRadio.addEventListener('click', function() {
  variable1.textContent = '(F) Gravitational force (N)';
  variable2.textContent = '(M) Mass 1 (kg)';
  variable3.textContent = '(m) Mass 2 (kg)';
  gravitationalForce = v1;
  mass1 = v2;
  mass2 = v3;
});

btn.addEventListener('click', function() {
  
  if(gravitationalForceRadio.checked)
    result.textContent = `Gravitational force = ${computeGravitationalForce().toFixed(5)} N`;

  else if(mass1Radio.checked)
    result.textContent = `Mass 1 = ${computeMass1().toFixed(5)} kg`;

  else if(mass2Radio.checked)
    result.textContent = `Mass 2 = ${computeMass2().toFixed(5)} kg`;

  else if(distanceRadio.checked)
    result.textContent = `Distance = ${computeDistance().toFixed(5)} m`;
})

// calculation

function computeGravitationalForce() {
  return (G * Number(mass1.value) * Number(mass2.value)) / Math.pow(Number(distance.value), 2);
}

function computeMass1() {
  return (Number(gravitationalForce.value) * Math.pow(Number(distance.value), 2)) / (G * Number(mass2.value));
}

function computeMass2() {
  return (Number(gravitationalForce.value) * Math.pow(Number(distance.value), 2)) / (G * Number(mass1.value));
}

function computeDistance() {
  return Math.sqrt((G * Number(mass1.value) * Number(mass2.value)) / Number(gravitationalForce.value), 2);
}