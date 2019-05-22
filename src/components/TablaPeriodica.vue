<template>
    <div class='periodic'>
      <periodo1 @onElementoSeleccionado="onElementoSeleccionado"/>
      <periodo2 @onElementoSeleccionado="onElementoSeleccionado"/>
      <periodo3 @onElementoSeleccionado="onElementoSeleccionado"/>
      <periodo4 @onElementoSeleccionado="onElementoSeleccionado"/>
      <periodo5 @onElementoSeleccionado="onElementoSeleccionado"/>
      <periodo6 @onElementoSeleccionado="onElementoSeleccionado"/>
      <periodo7 @onElementoSeleccionado="onElementoSeleccionado"/>
      <periodo6A @onElementoSeleccionado="onElementoSeleccionado" class="mt-3"/>
      <periodo7A @onElementoSeleccionado="onElementoSeleccionado"/>
    </div>
</template>

<script>

import Periodo1 from '@/components/Periodo1'
import Periodo2 from '@/components/Periodo2'
import Periodo3 from '@/components/Periodo3'
import Periodo4 from '@/components/Periodo4'
import Periodo5 from '@/components/Periodo5'
import Periodo6 from '@/components/Periodo6'
import Periodo7 from '@/components/Periodo7'
import Periodo6A from '@/components/Periodo6A'
import Periodo7A from '@/components/Periodo7A'
import ModalElemento from '@/components/modals/ModalElemento'

export default {
  name: 'TablaPeriodica',
  components: {
    'periodo1': Periodo1,
    'periodo2': Periodo2,
    'periodo3': Periodo3,
    'periodo4': Periodo4,
    'periodo5': Periodo5,
    'periodo6': Periodo6,
    'periodo7': Periodo7,
    'periodo6A': Periodo6A,
    'periodo7A': Periodo7A,
  },
  props: {
    composicionCentesimal: {
        type: Array
    }
  },
  methods: {
    onElementoSeleccionado (elemento) {
      this.composicionCentesimal.push({
        cantidadHallada: 0,
        elemento: elemento
      });               
    } 
  }
}
</script>
