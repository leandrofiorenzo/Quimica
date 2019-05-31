<template>
    <div class="row"> 
        <div class="col-12">
            <h4>Formula Molecular</h4>
        </div>          
        <div class="col-12">
            Masa molar(g):
            <input v-model="masaTotalSistema" type="number" class="form-control form-control-sm"/>
            <div v-for="elementoFormula in formulaMolecular" :key="elementoFormula.elemento.number" class="d-inline font-weight-bold" style="font-size: 30px">         
                {{elementoFormula.elemento.symbol}}<sub>{{elementoFormula.elementoAtomicidadFormulaMolecular}}</sub>
            </div>
        </div>
    </div>
</template>

<script>

import quimicaFunctions from "@/quimica";

export default {
    name: "FormulaMolecular",
    props: {
        composicionCentesimal: {
            type: Array
        }
    },
    data () {
        return {
            //Masa en gramos
            masaTotalSistema: 166, 
        }
    },
    computed: {
        formulaMinima () {
            return quimicaFunctions.calcularFormulaMinima(this.composicionCentesimal)
        },
        formulaMolecular () {
            return quimicaFunctions.calcularFormulaMolecularAPartirDeFormulaMinima(this.formulaMinima, this.masaTotalSistema)
        }
    }
}
</script>
