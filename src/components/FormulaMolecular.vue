<template>
    <div class="row"> 
        <div class="col-12">
            <h4>Formula Molecular</h4>
        </div>          
        <div class="col-12">  
            <div v-if="formulaMolecularObj.errorMsg != null" class="text-danger font-weight-bold">
                {{formulaMolecularObj.errorMsg}}
            </div>
            <div v-else>
            <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Masa (gramos)</span>
                    </div>
                    <input type="number" 
                        class="form-control" 
                        min="0" 
                        v-model="masa" />
                </div>             
                <div v-for="elementoFormula in formulaMolecularObj.formulaMolecular" :key="elementoFormula.elemento.number" class="d-inline font-weight-bold" style="font-size: 30px">         
                    {{elementoFormula.elemento.symbol}}<sub>{{elementoFormula.elementoAtomicidadFormulaMolecular}}</sub>
                </div>
            </div>
 
        </div>
    </div>
</template>

<script>
export default {
    name: "FormulaMolecular",
    data () {
        return {
            masa: 166, 
        }
    },
    computed: {
        formulaMolecularObj () {
            return this.$store.getters.getFormulaMolecular(this.masa)
        }
    }
}
</script>
