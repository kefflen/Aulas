const dados = require("./dados/candidatos-2018")



function comp(obj) {
    console.log(2)
}
function bubbleSort(vetor, fncomp) {
    fnPadrao = (n1, n2) => {
        return n1 > n2
    }
    let trocas
    let passadas = 0, comparacoes = 0, totalTrocas = 0
    do {
        passadas++
        trocas = 0
        //Ate o penultimo
        for (let i=0; i <= vetor.length - 2; i++) {
            comparacoes++
            if (fncomp(vetor[i], vetor[i+1])) {
                
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
                trocas++
            
            }

        }
        totalTrocas += trocas
    } while (trocas > 0)
     console.log({passadas, comparacoes, totalTrocas})
}

console.time("Ordem")
bubbleSort(dados, (a, b) => a.NM_CANDIDATO.localeCompare(b.NM_CANDIDATO, "pt-BR") > 0)
console.timeEnd("Ordem")
console.log(dados)