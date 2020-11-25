        var total =10;
        function sum(){
            var total=100;
            return function(total){
                console.log(total);// undefined  100
                // 看total是否是私有变量
                // 如看判断当前变量是一个私有变量：
                // 1. 当前作用域有没有被var;
                // 2. 有没有被function
                // 3. 是否是形参；
                //var total=1000;
                //function total(){}
                // 当获取变量所存储的值时，先找自己有没有，如果自己没有，那么向上一级作用域查找,如果上一级也没有，那么会继续向上查找，直到找到全局作用域，如果全局作用域也没有，会报错；这样一级一级向上查找形成一个作用域链；
                // 函数的上一级作用域跟函数在哪定义有关系，跟函数在哪执行无关；
            }
        }  
        var f =  sum();  // f接受到了sum返回的小函数；
        f();

        // function f(){
        //     number*=3;
        //     console.log(number);// NaN
        //     var number=1;
        //     console.log(number);// 1
        // }
        // f()
