function mersclarVetores(vetEsq, vetDir) {
    let vetRes = [], posEsq = 0, posDir = 0
    while(posEsq < vetEsq.length && posDir < vetDir.length) {
        if (vetEsq[posEsq] < vetDir[posDir]) {
            vetRes.push(vetEsq[posEsq])
            posEsq++
        } else {
            vetRes.push(vetDir[posDir])
            posDir++
        }
    }
}