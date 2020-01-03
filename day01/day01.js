/*
var count = 1;

var c = document.getElementById('container')
console.log(c);


c.onmousemove = function getUserAction() {
    c.innerHTML = count++
    console.log(count);
}
*/
/*
================
防抖
================
*/
/*
var count = 1;
var c = document.getElementById('container')

 function getUserAction(e) {
    c.innerHTML = count++
    console.log(this);
    console.log(e);
}

 function debounce(func,wait) {
    var timeout = null;
    return function(){
        var context = this
        var args = arguments
        clearTimeout(timeout)
        timeout = setTimeout(function(){func.apply(context,args)},wait)
        
    }
}

c.onmousemove = debounce(getUserAction,1000)
*/

/*
================
节流（时间戳）
================
*/
/*
var count = 1;
var c = document.getElementById('container')

 function getUserAction(e) {
    c.innerHTML = count++
    console.log(this);
    console.log(e);
}
function throttle(func,wait) {
    let context , args
    let previous = 0
    
        return function(){
            let now =+ new Date()
            context = this
            args = arguments
            if(now - previous > wait){
                func.apply(context,args)
                previous = now
            }
        }
    
}
console.log("时间戳节流");
c.onmousemove = throttle(getUserAction,1000)
*/

/*
================
节流（定时器）
================
*/

/*
var count = 1;
var c = document.getElementById('container')

 function getUserAction(e) {
    c.innerHTML = count++
    console.log(this);
    console.log(e);
}
function throttle(func,wait) {
    let context,args
    let timeout = null

        return function(){
            context = this
            args = arguments
            if(!timeout){
            timeout = setTimeout(function(){
                timeout = null
                func.apply(context,args)
            },wait)
        }
        }
    
}
console.log("定时器节流");
c.onmousemove = throttle(getUserAction,1000)
*/

/*
================
sort
================
*/
/*
[3, 15, 8, 29, 102, 22].sort((a,b)=>{return a-b});
console.log([3, 15, 8, 29, 102, 22].sort((a,b)=>a-b));
//a,b => 15,3
//a>b 调换位置
//a-b>0 换位置 a-b<=0 位置不变

*/
