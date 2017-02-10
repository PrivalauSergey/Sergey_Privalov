var Obj = {};
var string = ";key,value;key1,value;arrayHere:k1,v1;k2,v2;k3,v3;";
function getString() {
  //var form = document.querySelector('form');
  //var string = form.elements.string.value;
  debugger;
  var propertySplit = string.split(':');
  for(var i = 0; i < propertySplit.length; i += 2) {
    if(propertySplit[i] !== '') {
      var nameProperty = propertySplit[i].split(';');
      for (var i = 0; i < nameProperty.length-1; i++) {
          if(nameProperty[i] !== '') {
            var propertyValue = nameProperty[i].split(',');
            Obj[propertyValue[0]] = propertyValue[1];
        }
      }
    }
  }
  debugger;
  var arraySplit = string.split(':');
  for(var i = 0; i < arraySplit.length; i+=2) {
    if(arraySplit[i] !== '') {
      var nameProperty = arraySplit[0].split(';');
      Obj[nameProperty[nameProperty.length-1]] = [];
      var arrayProperty = arraySplit[1].split(';');
      for (var i = 0; i < arrayProperty.length; i++) {
          if(arrayProperty[i] !== '') {
            var propertyValue = arrayProperty[i].split(',');
            Obj[nameProperty[nameProperty.length-1]][propertyValue[0]] = propertyValue[1];
        }
      }
    }
  }
  return Obj;
}
console.log(getString());
