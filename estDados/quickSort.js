function quickSort(vetor) {
    let inicio = 0
    let fim = vetor.length - 2
    let pospivot = vetor.length - 1
    posDiv = -1
    for (let i = inicio; i<=fim; i++) {
        if(vetor[i] <vetor[pospivot]) {
            posDiv++
            [vetor[i], vetor[posDiv]] = [vetor[posDiv], vetor[i]]

        }
    }
    posDiv++
    [vetor[posDiv], vetor[pospivot]] = [vetor[pospivot], vetor[posDiv]]
}

let nums = [7, 3, 0, 8, 6, 2, 4, 9, 1, 5]
quickSort(nums)
console.log(nums)