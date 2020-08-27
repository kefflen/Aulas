

function decorator(func){
    function cronstructor(){
        let args = []
        for (i=0; i < arguments.length; i++) {
            args.push(arguments[i])
        }
        let obj = {
            call: func(arguments[0], arguments[1]),
            a: args
        }
        console.log(obj.call)
        console.log(args)
    return obj       
    }
    return cronstructor

}
x = decorator(function generic(n1, n2) {
    console.log("Func")
    console.log(n1, n2)
    return n1*n2
})
x(2, 3)


