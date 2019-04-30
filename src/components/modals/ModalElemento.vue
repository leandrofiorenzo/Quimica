<template>
    
    <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">{{elemento.name}}</h4>
            <button type="button" class="close" aria-label="Close" @click="$emit('close')">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <h5 class="d-inline"> Cantidad hallada del elemento: </h5>
            <input v-model="cantidadHallada" type="number" class="form-control form-control-sm d-inline" style="width: 75px"> %
            <br>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="agregarPorcentaje">Continuar</button>
        </div>                
    </div>  
</template>

<script>
export default {
    name: "ModalElemento",
    props: {
        elemento: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            cantidadHallada: 0
        }
    },
    methods: {
        agregarPorcentaje () {
            if(this.cantidadHallada <= 0 || this.cantidadHallada > 100) {
                alert("Ingrese un porcentaje válido.")
                return
            }

            let itemFormulaMinima = {
                cantidadHallada: this.cantidadHallada,
                elemento: this.elemento
            }         
        }
    }
}
</script>

