//Devuelve la formula mínima a partir de los elementos que se le pasen y su correspondiente cantidad hallada en porcentaje
//Parámetros:
//composicionCentesimal: [{ elemento: {...}, cantidadHallada: 3,6 }, { elemento: {...}, cantidadHallada: 96,4 }]
let calcularFormulaMinima = (composicionCentesimal) => {
    if(composicionCentesimal == null || composicionCentesimal == undefined || composicionCentesimal.length <= 0) return null
    
    let formulaMinima = []

    //Recorro todo lo que haya adentro de la composición centesimal
    for(let i = 0; i < composicionCentesimal.length; i++) {      
        //Divido la cantidad hallada del elemento por el Mr de dicho elemento y lo guardo en elementoCantidadRelativa   
        let atomoFormulaMinima = {
            elemento: composicionCentesimal[i].elemento,
            elementoCantidadRelativa: composicionCentesimal[i].cantidadHallada / composicionCentesimal[i].elemento.atomic_mass,
            elementoAtomicidadFormulaMinima: 0
        } 

        formulaMinima.push(atomoFormulaMinima)
    }

    let valorMinimo = formulaMinima.reduce(
        (valorMinimo, elementoComposicionCentesimal) => (elementoComposicionCentesimal.elementoCantidadRelativa < valorMinimo ? elementoComposicionCentesimal.elementoCantidadRelativa : valorMinimo), 
        formulaMinima[0].elementoCantidadRelativa)
    
    for(let j = 0; j < formulaMinima.length; j++) {      
        formulaMinima[j].elementoAtomicidadFormulaMinima = Math.round(formulaMinima[j].elementoCantidadRelativa / valorMinimo)
    }

    return formulaMinima.sort((elemento1, elemento2) => 
        elemento1.elemento.electronegativity_pauling - elemento2.elemento.electronegativity_pauling);
}

//Devuelve la formula molecular a partir de la formula mínima y la masa total del sistema
//Parámetros:
//formulaMinima: [{ elemento: {...}, elementoCantidadRelativa: 10, elementoAtomicidadFormulaMinima: 2 }, { elemento: {...}, elementoCantidadRelativa: 9, elementoAtomicidadFormulaMinima: 1 }]
//masaDelSistema: 203 (expresada en gramos)
let calcularFormulaMolecularAPartirDeFormulaMinima = (formulaMinima, masaDelSistema) => {  
    if(formulaMinima == null || formulaMinima == undefined || formulaMinima.length <= 0) return null
    if(masaDelSistema <= 0) return null;
    
    let formulaMolecular = [...formulaMinima]  
    let masaMolecularFormulaMinima = 0

    for(let i = 0; i < formulaMolecular.length; i++) {
        masaMolecularFormulaMinima += formulaMolecular[i].elemento.atomic_mass * formulaMolecular[i].elementoAtomicidadFormulaMinima
    }

    let coeficienteFormulaMolecular = Math.round(masaDelSistema / masaMolecularFormulaMinima)

    for(let j = 0; j < formulaMolecular.length; j++) {
        formulaMolecular[j].elementoAtomicidadFormulaMolecular = formulaMolecular[j].elementoAtomicidadFormulaMinima * coeficienteFormulaMolecular
    }

    return formulaMolecular.sort((elemento1, elemento2) => 
        elemento1.elemento.electronegativity_pauling - elemento2.elemento.electronegativity_pauling)
}

export default { calcularFormulaMinima, calcularFormulaMolecularAPartirDeFormulaMinima }