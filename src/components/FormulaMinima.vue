<template>
    <div class="p-2 bg-formula-minima" style="border-radius: 10px">
        <div class="row">
            <div class="col-3">
                <h4>Composición Centesimal</h4>
                <div v-for="elementoComposicionCentesimal in composicionCentesimal" :key="elementoComposicionCentesimal.elemento.number">
                    {{elementoComposicionCentesimal.elemento.name}} ({{elementoComposicionCentesimal.cantidadHallada}}%)
                    <input v-model="elementoComposicionCentesimal.cantidadHallada" type="number" class="form-control form-control-sm"/>
                    <button class="btn btn-danger btn-sm" @click="sacarElementoDeComposicionCentesimal(elementoComposicionCentesimal)">
                        Eliminar
                    </button>
                </div>
            </div>
            <div class="col-3">
                <h4>Formula Mínima</h4>
                <div v-for="elementoFormula in formulaMinima" :key="elementoFormula.elemento.number" class="d-inline font-weight-bold" style="font-size: 30px">         
                    {{elementoFormula.elemento.symbol}}<sub>{{elementoFormula.elementoAtomicidadFormulaMinima}}</sub>
                </div>
            </div>
            <div class="col-3">
                <h4>Formula Molecular</h4>
                Masa molar(g):
                <input v-model="masaTotalSistema" type="number" class="form-control form-control-sm"/>

                <div v-for="elementoFormula in formulaMolecular" :key="elementoFormula.elemento.number" class="d-inline font-weight-bold" style="font-size: 30px">         
                    {{elementoFormula.elemento.symbol}}<sub>{{elementoFormula.elementoAtomicidadFormulaMolecular}}</sub>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>

import quimicaFunctions from "@/quimica";

export default {
    name: "FormulaMinima",
    props: {
        composicionCentesimal: {
            type: Array
        }
    },
    data () {
        return {
            masaTotalSistema: 166, //Gramos...
        }
    },
    methods: {
        sacarElementoDeComposicionCentesimal(elementoComposicionCentesimal) {
            let index = this.composicionCentesimal.indexOf(elementoComposicionCentesimal)
            this.composicionCentesimal.splice(index, 1)
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

<style>
.bg-formula-minima {
    background-color: #1fc8db;
    background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
    color: white;
    opacity: 0.95;
}
</style>
