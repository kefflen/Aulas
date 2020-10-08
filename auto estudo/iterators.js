let l = [1, 2, 3]
l.length
let obj = {
    clients: ["Ana", "Pedro", "João"],
    idades: [20, 22, 19],
    [Symbol.iterator]: function () {
        let iterable = this.clients.map((value, index) => {
            return `Nome: ${value}; idade: ${this.idades[index]}`
        })
        return {
            next: () => ({
                done: iterable.length === 0,
                value: iterable.shift()
            })
        }
    }
}

for (let client of obj) {
    console.log("Cliente: ", client)
}