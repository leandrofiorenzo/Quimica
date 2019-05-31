<template>
  <div class="periodic-row">
    <div v-for="i in 18" :key="i" class="cell" @click="agregarElemento(elemento(i))">
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
export default {
  name: "Periodo5",
  data () {
    return {
      periodoNumero: 5
    }
  },
  methods: {
    async agregarElemento(elemento) {
      try {
        await this.$store.dispatch('agregarElemento', elemento);
      } catch(err) {
        this.$snotify.info(err);
      }
    }
  },
  computed: {
    elemento () {
      return (grupoNumero) => {
        return this.$store.getters.getElementoPorPeriodoYGrupo(this.periodoNumero, grupoNumero)
      }
    }
  }
}
</script>
