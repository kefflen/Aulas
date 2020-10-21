

function formaGeometrica(base, altura, tipo) {
    return {base, altura, tipo}
}
retangulo = formaGeometrica(4.5, 3.75, "R")
triangulo = formaGeometrica(4.5, 3.75, "T")
elipse = formaGeometrica(4.5, 3.75, "E")

const area = forma => {
    switch(forma.tipo){
        case "R":
            return forma.base * forma.altura
        case "T":
            return forma.base * altura/2
        case "E":
            return (forma.base / 2) * (forma / 2) * Math.PI
        default:
            return undefined
    }
}