<template>
    <div class='periodic'>
      <periodo1/>
      <periodo2/>
      <periodo3/>
      <periodo4/>
      <periodo5/>
      <periodo6/>
      <periodo7/>
      <periodo6A class="mt-3"/>
      <periodo7A/>  
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
  }
}
</script>
