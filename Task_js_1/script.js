//----------------String---------------------------------

function revesreString(str) {
    return str.split('').reverse().join('');
}
console.log("Reverse: "+revesreString('foo gfd bar'));


function isStartWith(str,symbol) {
  if(str[0] === symbol) {
    return true;
  }
  else {
    return false;
  }
}
console.log("SartWith: "+isStartWith('async','a'));

function isEndWith(str,symbol) {
  if(str[str.length-1] === symbol) {
    return true;
  }
  else {
    return false;
  }
}
console.log("EndWith: "+isEndWith('bfcv','v'));

function isCamelCase(str) {
  var afterUpper = 0;
  var isCamel;
  for (var i = 0; i < str.length; i++) {
      if (str[0] !== str[0].toLowerCase()) {
        return false;
      }
      if(str[i] === str[i].toUpperCase()) {
          if(i - afterUpper > 0) {
            afterUpper = i;
            isCamel = true;
          }
          else {
            isCamel = false;
          }
      }
      if(afterUpper > 0) {
        isCamel = true;
      }
      else {
        isCamel = false;
      }
  }
  return isCamel;
}
console.log("CamelCase: "+isCamelCase('aD'));

function isPascalCase(str) {
  var isPascalCase;
  var afterPascal = 0;
  for (var i = 0; i < str.length; i++) {
      if(str[0] === '_') {
        return false;
      }
      if(str[i] === '_') {
        afterPascal = i;
      }
      if(str[afterPascal + 1] == '_' && afterPascal > 0) {
          return false;
      }
      try {
        if(str[afterPascal + 1].match(/\w/)) {
          isPascalCase = true;
        }
        else {
          return false;
        }
      } catch (e) {
        return false;
      }
  }
  return isPascalCase;
}
console.log("PascalCase: "+isPascalCase('p_Case'));

function insertionSort(array) {
  var x;
  var j;
  for (var i = 0; i < array.length; i++) {
    x = array[i];
    j = i;
    while(j > 0 && array[j-1] > x) {
      array[j] = array[j-1];
      j = j-1;
    }
    array[j] = x;
  }
  return array;
}
console.log("InsertionSort: "+insertionSort([1,3,5,8,1,2,10,20,30,4,64], 11));

function quickSort(A)
{
    if (A.length == 0) {
      return [];
    }
    var a = [];
    var b = [];
    var p = A[0];
    for (var i = 1; i < A.length; i++) {
      if(A[ i ] < p) {
        a[a.length] = A[ i ];
      }
      else {
        b[b.length] = A[ i ];
     }
   }
   return quickSort(a).concat( p,quickSort(b) );
}
console.log("QuickSort: "+quickSort([1,3,5,8,1,2,10,20,30,4,64]));

function merge(a,low,mid,high) {
    var b = new Array(high+1-low);
    var h;
    var i;
    var j = mid+1;
    var k;
    var h = low
    var i = 0;
    while (h <= mid && j <= high ) {
      if (a[h] <= a[j])
      {
        b[i] = a[h];
        h++;
      }
      else {
         b[i] = a[j];
         j++;
      }
      i++;
     }
    if (h > mid) {
      for (k = j; k <= high; k++){
        b[i] = a[k];
        i++;
      }
    }
    else {
      for (k = h; k <= mid; k++) {
        b[i] = a[k];
        i++;
      }
    }
    for (k=0; k<=high-low; k++) {
      a[k+low] = b[k];
    }
    return a;
}

function mergeSort(A) {
    function merge_sort(a,low,high) {
      if (low < high) {
        var mid = Math.floor((low+high)/2);
        merge_sort(a, low, mid);
        merge_sort(a, mid+1, high);
        merge(a, low, mid, high);
        }
     }
    var n = A.length;
    merge_sort(A, 0, n-1);
    return A;
}
console.log("MergeSort: "+mergeSort([1,3,5,8,1,2,10,20,30,4,64]));

function bubbleSort(array) {
  var x;
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - i; j++) {
      if(array[j] > array[j + 1]) {
          x = array[j];
          array[j] = array[j + 1];
          array[j + 1] = x;
      }
    }
  }
  return array;
}
console.log("BubbleSort: "+bubbleSort([1,3,5,8,1,2,10,20,30,4,64]));

function shellSort(A) {
    var n = A.length;
    var i = Math.floor(n/2);
    var k = 0;
    var t = 0;
    while (i > 0) {
      for (var j = 0; j < n; j++) {
            k = j;
            t = A[j];
          while (k >= i && A[k-i] > t) {
             A[k] = A[k-i];
             k -= i;
          }
          A[k] = t;
      }
      i = (i==2) ? 1 : Math.floor(i*5/11);
     }
    return A;
}
console.log("ShellSort: "+shellSort([1,3,5,8,1,2,10,20,30,4,64]));

function countingSort(A) {
    var n = A.length;
    var Count = []
    var B = [];
    for (var i = 0; i < n; i++) Count[ i ] = 0; {
    for (var i = 0; i < n-1; i++) {
      for (var j = i+1; j < n; j++) {
        if (A[ i ] < A[j]) {
          Count[j]++;
        }
        else {
          Count[ i ]++;
        }
      }
     }
    }
    for (var i = 0; i < n; i++) {
      B[Count[ i ]] = A[ i ];
    }
    return B;
}
console.log("CountingSort: "+countingSort([1,3,5,8,1,2,10,20,30,4,64]));

function maxValue(arrayNumber) {
  var maxValue = arrayNumber[0][0];
  for (var i = 0; i < arrayNumber.length; i++) {
    for (var j = 0; j < arrayNumber[i].length; j++) {
      if(maxValue < arrayNumber[i][j]) {
        maxValue = arrayNumber[i][j];
      }
    }
  }
  return maxValue;
}
console.log("MaxValue: "+maxValue([[1,2],[33,1],[65,6],[23,8],[1,0]]));

function minValue(arrayNumber) {
  var minValue = arrayNumber[0][0];
  for (var i = 0; i < arrayNumber.length; i++) {
    for (var j = 0; j < arrayNumber[i].length; j++) {
      if(minValue > arrayNumber[i][j]) {
        minValue = arrayNumber[i][j];
      }
    }
  }
  return minValue;
}
console.log("MinValue: " + minValue([[1,2],[33,1],[65,6],[23,8],[1,0]]));

function avergValue(arrayNumber) {
  var count = 0;
  var summa = 0;
  for (var i = 0; i < arrayNumber.length; i++) {
    for (var j = 0; j < arrayNumber[i].length; j++) {
      summa+=arrayNumber[i][j];
    }
  }
  count+= arrayNumber.length;
  for (var i = 0; i < arrayNumber.length; i++) {
    count+= arrayNumber[i].length;
  }
  return summa / count;
}
console.log("AvergValue: " + avergValue([[1,2],[33,1],[65,6],[23,8],[1,0]]));

function printTreangle() {
  var array = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
  var i = 0;
  var j = 0;
  while(i < array.length / 2) {
    while(j < array.length) {
      if(i >= j) {
      array[i][j] = 1;
      }
      j++;
    }
    j = 0;
    i++;
  }
  i = Math.round(array.length / 2);
  j = 0;
  var x=i-1;
  while(i < array.length) {
    while(j < x) {
      if(i >= j) {
      array[i][j] = 1;
      }
      j++;
    }
    j = 0;
    x--;
    i++;
  }
  console.log(array);
}
console.log("Triangle print: ");
printTreangle();

var obj1 = { a: 2, c: 3, d: 3};
var obj2 = { a: 1 };
var obj3 = { a: 2, c: 3};
var arOfObj = [obj1, obj2, obj3];
function sortObject(arOfObj, sortProperty) {
      if(sortProperty === 'asc') {
          arOfObj.sort(function compare(a,b) {
              if (a.a > b.a) {
                return 1;
              }
              if (a.a < b.a) {
                return -1;
              }
            });
      }
      if(sortProperty === 'desc') {
          arOfObj.sort(function compare(a,b) {
            if (a.a > b.a) {
              return -1;
            }
            if (a.a < b.a) {
              return 1;
            }
          });
      }
}
sortObject(arOfObj,'asc');
console.log("Object sort: asc");
for (var i = 0; i < arOfObj.length; i++) {
    console.log(arOfObj[i]);
}
console.log("----------------------------------");
sortObject(arOfObj,'desc');
console.log("Object sort: desc");
for (var i = 0; i < arOfObj.length; i++) {
    console.log(arOfObj[i]);
}
