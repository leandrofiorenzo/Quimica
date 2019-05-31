<template>
    <div class="row"> 
        <div class="col-12">
            <h4>Composición centesimal ({{porcentajeTotal.toFixed(2)}}%)</h4>  
        </div>          
        <div class="col-6 mb-2" v-for="elementoComposicionCentesimal in composicionCentesimal" :key="elementoComposicionCentesimal.elemento.number">   
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">{{elementoComposicionCentesimal.elemento.name}}</span>
                </div>
                <input type="number" 
                    class="form-control"
                    min="0" 
                    max="100" 
                    v-model="elementoComposicionCentesimal.cantidadHallada"/>
                <div class="input-group-append">
                   <span class="input-group-text" @click="sacarElementoDeComposicionCentesimal(elementoComposicionCentesimal)">
                        Quitar
                    </span> 
                </div>
            </div>       
        </div>
    </div>
</template>

<script>

import quimicaFunctions from "@/quimica";

export default {
    name: "ComposicionCentesimal",
    props: {
        composicionCentesimal: {
            type: Array
        }
    },
    methods: {
        sacarElementoDeComposicionCentesimal(elementoComposicionCentesimal) {
            let index = this.composicionCentesimal.indexOf(elementoComposicionCentesimal)
            this.composicionCentesimal.splice(index, 1)
        }
    },
    watch: {
        porcentajeTotal(newValue, oldValue) {
            if(newValue > 100) alert("No se puede superar el 100%")
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
        }
    }
}
</script>
