<template>
    <div class='periodic'>

      <periodo1 @onElementoSeleccionado='onElementoSeleccionado'/>
      <periodo2 />
      <periodo3 />
      <periodo5 />
      <periodo6 />
      <periodo7 />

      <div class="periodic-row"></div>

      <periodo6A />
      <periodo7A />
    
      <div style="clear: both;"></div> 

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
  methods: {
    onElementoSeleccionado (elemento) {
      if(elemento) {
        this.$modal.show(
          ModalElemento, 
          { elemento: elemento },
          { height: 'auto'}
        );
      }
    } 
  }
}
</script>
