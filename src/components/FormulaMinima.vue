<template>

    <div class="row"> 
        <div class="col-12">
            <h4>Formula Mínima</h4>
        </div>          
        <div class="col-12">
            <div v-if="formulaMinima != null">
                <div v-for="elementoFormula in formulaMinima" :key="elementoFormula.elemento.number" class="d-inline font-weight-bold" style="font-size: 30px">         
                    {{elementoFormula.elemento.symbol}}<sub>{{elementoFormula.elementoAtomicidadFormulaMinima}}</sub>
                </div>
            </div>
            <span v-else>{{formulaMinimaError}}</span>          
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
    computed: {
        porcentajeTotal() {
            if(this.composicionCentesimal.length > 0) {
                let porcentajeTotal = 0;
                this.composicionCentesimal.forEach(e => {
                    porcentajeTotal += parseFloat(e.cantidadHallada)
                });
                return porcentajeTotal
            }
            return 0;
        },
        formulaMinimaError () {
            if(this.composicionCentesimal.length < 2)
                return 'Debe seleccionar al menos 2 elementos.'
            if(this.porcentajeTotal > 100) 
                return 'El porcentaje total no puede ser mayor al 100%.'
            if(this.porcentajeTotal < 100) 
                return 'El porcentaje total debe ser 100%.'
        },
        formulaMinima () {
            if(this.mostrarFormulaMinima)
                return quimicaFunctions.calcularFormulaMinima(this.composicionCentesimal)
            return null
        }
    }
}
</script>