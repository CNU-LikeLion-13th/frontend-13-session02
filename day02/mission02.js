let arr = [1,2,3];
       

const mapWithCallback = (arr, callback) => {
     let result = arr.map(item => item); 
     callback(result);
}
const calldouble = (result) => {
 result.push('double');
 console.log(result);
}

const calladdTen = (result) => {
 result.push('addTen');
 console.log(result);
}

mapWithCallback(arr,calldouble);
mapWithCallback(arr,calladdTen);