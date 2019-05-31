<template>
    <div class="row"> 
        <div class="col-12">
            <h4>Formula Mínima</h4>
        </div>        
        <div class="col-12">
            <div v-if="formulaMinimaObj.errorMsg != null" class="text-danger font-weight-bold">
                {{formulaMinimaObj.errorMsg}}
            </div> 
            <div v-else v-for="elementoFormula in formulaMinimaObj.formulaMinima" :key="elementoFormula.elemento.number" class="d-inline font-weight-bold" style="font-size: 30px">         
                {{elementoFormula.elemento.symbol}}<sub>{{elementoFormula.elementoAtomicidadFormulaMinima}}</sub>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "FormulaMinima",
    computed: {
        formulaMinimaObj () {
            return this.$store.getters.getFormulaMinima
        }
    }
}
</script>