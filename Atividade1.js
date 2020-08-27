/*

   DADOS PARA O EXERCÍCIO

   `nome;sigla;area;populacao
   Sergipe;SE;21915.08;2278308
   Alagoas;AL;27848.14;3322820
   Rio Grande do Norte;RN;52811.05;3479010
   Paraíba;PB;56469.78;3996496
   Pernambuco;PE;98148.32;9496294
   Ceará;CE;148920.47;9075649
   Piauí;PI;251577.74;3264531
   Maranhão;MA;331937.45;7035055
   Bahia;BA;564733.18;14812617`

*/

let estadosNe = []

let estado1 = {
   nome: 'Sergipe',
   sigla: 'SE',
   area: 21915.08,
   populacao: 2278308
}

estadosNe.push(estado1)
function Estado(nome, sigla, area, populacao) {
    return {nome: nome, sigla:sigla, area:area, populacao:populacao}
}

fabrica = function (texto) {
    let words = texto.split("\n")
    let final = []
    for (obj of words) {
        let [nome, sigla, area, populacao] = obj.split(";")
        final.push(new Estado(nome.trim(), sigla.trim(), Number(area.trim()), Number(populacao.trim())))
    }
    return final
    }

let t = `Alagoas;AL;27848.14;3322820
   Rio Grande do Norte;RN;52811.05;3479010
   Paraíba;PB;56469.78;3996496
   Pernambuco;PE;98148.32;9496294
   Ceará;CE;148920.47;9075649
   Piauí;PI;251577.74;3264531
   Maranhão;MA;331937.45;7035055
   Bahia;BA;564733.18;14812617`

let res = fabrica(t)


/*
   1) Crie objetos para os demais Estados, segundo o modelo acima, e acrescente-os
      ao vetor estadosNe usando push().
*/
for (obj of res) {
    estadosNe.push(obj)
}
/*
   2) Escreva uma arrow function que receba dois parâmetros, área e população, e
      calcule a densidade demográfica retornando o resultado da divisão da
      segunda pela primeira. 
*/
densidade = (area, populacao) => populacao/area
/*
   3) Percorra o vetor estadosNe usando um for tradicional. Para cada estado,
      chame a arrow function criada em 2) e efetue o cálculo correspondente.
      Com o resultado do cálculo, crie uma propriedade chamada 'densidade
      demográfica' para cada objeto representando um Estado.

      Durante este mesmo loop, elimine a propriedade 'sigla' dos objetos.

*/
for (let i=0; i < estadosNe.length; i++) {
    obj = estadosNe[i]
    obj.densidade = densidade(obj.area, obj.populacao)
    delete obj.sigla
}
/* 4) Escreva uma arrow function que receba um objeto. Na função, use for..in
      para extrair as propriedades e seus valores e exibi-los com console.log().

*/
mostrarEstado = obj => {
    for (attr in obj) {
        console.log(`Propiedade: ${attr}; valor: ${obj[attr]}`)
    }
}

/* 5) Percorra o vetor estadosNe usando for..of. Para cada objeto no vetor,
      invoque a função escrita em 4) para exibi-lo.
*/
for (obj of estadosNe) {
    console.log("---------------------------------------")
    mostrarEstado(obj)
}
/*
   6)
      a) Declare um vetor vazio.
      b) Insira no vetor criado no item a) apenas o nome de cada Estado, conforme
         os dados no topo deste arquivo, um de cada vez. Faça as inserções de 
         modo que o vetor final esteja em ordem alfabética. No caso, o primeiro 
         Estado (Sergipe), pode ser inserido com push(), mas o segundo (Alagoas)
         deve ser inserido com unshift(), para manter a ordem alfabética. 
         O terceiro Estado (Rio Grande do Norte) deve ser inserido entre os dois 
         já existentes, e assim por diante.

*/

let nomes = []
for (obj of estadosNe) {
    if (nomes.length >= 1){
        for (i in nomes) {
            if (obj.nome < nomes[i]) {
                nomes.splice(i, 0, obj.nome)
                break
            }
            else if (i == nomes.length - 1) {
                nomes.push(obj.nome)
            }
        }
    } else {
        console.log("ELSE")
        nomes.push(obj.nome)
    }
}
console.log(nomes)