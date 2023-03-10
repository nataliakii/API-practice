const _ = require("lodash");

// const count = (str)=>{
//     str=str.toLowerCase()
//     console.log(str)
//     let obj={}
//     for (let i=0;i<str.length;i++){
//         if (obj[str[i]]){
//             console.log(obj[str[i]])
//             obj[str[i]]=obj[str[i]]+1
//         }  
//         else obj[str[i]]=1
//     }
//     return obj
// } 
// console.log(count('geasfsdgvdsf----FASSD'))

// const numberCount = (array) => {
//     let obj={}
//     for (let i=0; i<array.length; i++){
//         if (obj[array[i]]){
//             obj[array[i]] = obj[array[i]]+1
//         }
//         else obj[array[i]]=1
//     }
//     return obj
// }

// console.log(numberCount([1,2,3,4,5,3,12,3,4,5,2,3,4,2,31,3,4]))

// function syn(){
//     const args= Array.from(arguments)
//     console.log('arguments', arguments)
//     console.log('args',args)
//     function symDiff(array1, array2, index){
//         console.log(index)
//         let result=[]
//         array1.forEach((item)=>{
//             if(!array2.includes(item))
//             result.push(item)

//         })
//         array2.forEach((item)=>{
//             if(!array1.includes(item))
//             result.push(item)

//         })
 
//         return result

//     }

//     return args.reduce(symDiff)
// }

// console.log(syn([1,2,3],[5,2,1,4]))

// function binarySearch(list,target){
//     let midpoint
//     let first = 0
//     let last = list.length-1
//     while(first<=last){
//         midpoint=Math.round((first+last)/2)
//         if (list[midpoint]===target){
//             console.log("index of the target is", midpoint)
//             return midpoint
//         }
//         else if (list[midpoint]<target){
//             first=midpoint+1
//         }
//         else last=midpoint+1
//     }
//     return console.log("nothing is found")
// }
// binarySearch([1,3,4,5,6,7,8],1)

// const arr = [{a:"age0", b:'23123'},{a:"age1", b:'23ae123'}, {a:"age2", b:'23123'},{a: "age5", b:"23131"}]
// const a =_.sortBy(arr, function (item) {
//     return item.a;
//   })
// console.log(a)

const array = ['1','1','1']
const ret = array.map(parseInt)

// console.log(['1','1','01','one', 'osdfsd'].map(e => parseInt(e)))
// console.log(['1','1','3','one', 'osdfsd'].map(parseInt))
// console.log(parseInt('10',10))
// console.log(parseInt('2333',10)) // 2333
// console.log(parseInt('2333',4)) // 191
// console.log(parseInt('2333',6)) // 561  
// console.log(parseInt('2333',2)) // NaN




