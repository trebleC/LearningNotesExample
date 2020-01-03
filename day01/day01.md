### 第1题: ['1','2','3'].map(parseInt) what & why?
+ 答案：
```
[ '1', '2' , '3'  ].map( parseInt )
// [1 , NaN , NaN ]
```
```
[ '1', '2' , '3'  ].map( parseInt )
==> 
[ '1', '2' , '3'  ].map( 
            ( value , index  ) => {return parseInt( value , index ) 
            
            })
```

+ basis

```
parseInt(value，radix) 
```
函数解析一个字符串参数，并返回一个指定基数的整数 (数学系统的基础)。
```
string
```
 要被解析的值。如果参数不是一个字符串，则将其转换为字符串(使用 ToString 抽象操作)。字符串开头的空白符将会被忽略。radix 一个介于2和36之间的整数(数学系统的基础)，表示上述字符串的基数。默认为10。 返回值 返回一个整数或NaN
 
```
parseInt(100); // 100
parseInt(100, 10); // 100
parseInt(100, 2); // 4 -> converts 100 in base 2 to base 10
```

### 防抖 & 节流
- url

https://github.com/mqyqingfeng/Blog/issues/26

https://github.com/mqyqingfeng/Blog/issues/22

+ #### 防抖
原理：你尽管触发事件，但是我我一定在事件触发的n秒后才执行，如果再n秒内又触发了函数，那么按照新的事件重新计时
❗❗❗ this 和 event 的作用域
```

var count = 1;
var c = document.getElementById('container')
 function getUserAction(e) {
    c.innerHTML = count++
    console.log(this);
    console.log(e);
}
 function debounce(func,wait) {
    var timeout = null;
    return function(){
       ❗❗❗ var context = this
        ❗❗❗var args = arguments
        clearTimeout(timeout)
       ❗❗❗ timeout = setTimeout(function(){func.apply(context,args)},wait)
        
    }
}
c.onmousemove = debounce(getUserAction,1000)


```

+ #### 节流
如果要持续触发事件，每隔一段时间，只执行一次事件。
```

 function debounce(func,wait) {
    var timeout = null;
    return function(){
        var context = this
        var args = arguments
        clearTimeout(timeout)
        timeout = setTimeout(function(){func.apply(context,args)},wait)
        
    }
}
```

+ ##### 使用时间戳
    当触发事件时，我们取出当前的时间戳，然后减去之前的时间戳（一开始值设为0），如果计算得数值大于wait所设置的时间周期，就执行函数，然后更新当前的时间戳
    
```
function throttle(func,wait) {
    let context , args
    let previous = 0
    
        return function(){
            let now =+ new Date()
            context = this
            args = arguments
            if(now - previous > wait){
                func.apply(context,args)
                previous = now
            }
        }
}
```
    
 + ##### 使用定时器
    当触发事件时，我们设置一个定时器，再触发事件的时候，如果定时器存在，就不执行，直到定时器执行，然后执行执行函数，清空定时器，设置下一个定时器
    
```
function throttle(func,wait) {
    let context,args
    let timeout = null
        return function(){
            context = this
            args = arguments
            if(!timeout){
            timeout = setTimeout(function(){
                timeout = null
                func.apply(context,args)
            },wait)
        }
        }
    
}
```


### 第3题: [3, 15, 8, 29, 102, 22].sort()
默认排序的方式是会将数组元素转为字符串，然后按照utf-16编码顺序进行排序。
//[102, 15, 22, 29,3, 8]

```
[3, 15, 8, 29, 102, 22].sort( (a,b)=>a-b )
// a,b : 15,3      8, 15      ...........
a-b>0 位置调换
a-b<=0 位置不变
```
