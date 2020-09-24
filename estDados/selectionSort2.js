
/* 
    1) O vetor onde sera feita a busca
    2) A posição inicial do vetor a partir da qual sera feito a busca
    
*/
let passadas = 0, comparacoes = 0, totalTrocas = 0
function encontrarMenor(vetor, inicio) {
    let res = inicio
    for (let i = inicio + 1; i < vetor.length; i++) {
        comparacoes++
        if (vetor[i] < vetor[res]) res = i
    }
    return res
}
function selection(vetor) {
    //vai da primeira ate a penultima posição
    for (let i=0; i < vetor.length - 1; i++) {
        passadas++
        let posMenor = encontrarMenor(vetor, i + 1)
        comparacoes++
        if (vetor[i] > vetor[posMenor]) {
            [vetor[i], vetor[posMenor]] = [vetor[posMenor], vetor[i]]
            totalTrocas++
        }
    }
    console;log({passadas, comparacoes, totalTrocas})
}
const nums = [56, 78, 44, 23, 99, 14, 60, 27, 6, 82, 31, 65]
selection(nums)
console.log(nums)