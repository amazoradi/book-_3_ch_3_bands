let bandNumber = 1;
let takeNumber = function (name) {
  console.log(bandNumber++ + ". " + name);
};

takeNumber("Metallica");
takeNumber("Katty Purry");
takeNumber("Tenacious D");
