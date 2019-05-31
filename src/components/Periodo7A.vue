<template>
  <div class="periodic-row">
    <div v-for="i in 18" :key="i" class="cell" @click="$emit('onElementoSeleccionado', elemento(i))">
      <div v-if="elemento(i)" class="element">
        <div class="at_num">{{elemento(i).number}}</div>
        <div class="symbol">{{elemento(i).symbol}}</div>
        <div class="at_details">
          {{elemento(i).name}}
          <br>{{elemento(i).atomic_mass.toFixed(2)}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { obtenerElemento } from '@/elementos.js'

export default {
  name: "Periodo7A",
  computed: {
    elemento () {
      return (indice) => {
        return obtenerElemento(9, indice)
      }
    }
  }
}
</script>