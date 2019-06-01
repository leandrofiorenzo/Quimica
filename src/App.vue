<template>
  <div id="app" class="container-fluid pt-2 text-center">
   
    <tabla-periodica :composicionCentesimal="composicionCentesimal"/>


    <div class="row bg-formula-minima">
      <composicion-centesimal class="col-6" :composicionCentesimal="composicionCentesimal"/>
      <formula-minima class="col-3" :composicionCentesimal="composicionCentesimal"/>
      <formula-molecular class="col-3" :composicionCentesimal="composicionCentesimal"/> 
    </div>

    <tooltip-elemento class="center-pane" v-if="elementoOnHover != null" :elemento="elementoOnHover"/>

    <vue-snotify></vue-snotify>

  </div>
</template>

<script>

import TablaPeriodica from        "@/components/TablaPeriodica"
import ComposicionCentesimal from "@/components/ComposicionCentesimal"
import FormulaMinima from         "@/components/FormulaMinima"
import FormulaMolecular from      "@/components/FormulaMolecular"
import TooltipElemento from       "@/components/TooltipElemento"

export default {
  name: "app",
  components: {
    'tabla-periodica': TablaPeriodica,
    'composicion-centesimal': ComposicionCentesimal,
    'formula-minima': FormulaMinima,
    'formula-molecular': FormulaMolecular,
    'tooltip-elemento': TooltipElemento
  },
  data () {
    return {
      composicionCentesimal: []
    }
  },
  computed: {
    elementoOnHover () {
      return this.$store.getters.getElementoOnHover
    }
  }
};
</script>

<style lang="less">

@import "~vue-snotify/styles/material.css";

.bg-formula-minima {
    background-color: #1fc8db;
    background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
    color: white;
    opacity: 0.95;
}

 #app {
  min-height: 100vh;
  overflow-x: hidden;
  background-image:    url('./assets/bg-quimica.jpeg');
  background-repeat:   no-repeat;
  background-position: center center;    
 }

 .composicion-porcentaje {
   width: 90px;
 }

.transition(@args) {
  -webkit-transition: @args;
          transition: @args;
}

.transform(@args) {
  -webkit-transform: @args;
      -ms-transform: @args;
          transform: @args;
}

.transform-origin(@args) {
  -webkit-transform-origin: @args;
      -ms-transform-origin: @args;
          transform-origin: @args;
}

// Styles
body {
  font-family: Arial;
  .transform(translateZ(0)); // prevent flashing
}

.periodic {
  position: relative;
  height: 200px;
  margin-right: -1px;
  text-shadow: none;
}

.periodic-row {
  height: 65px;
}

.cell {
  float: left;
  position: relative;
  //width: 5.55%;
  height: 100%;
  width: 85px;
  //height: 65px;
}

.element {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 1px;
  right: 1px;
  box-sizing: border-box;
  box-shadow: 0px 0px 4px rgba(255,255,255,0.5);
  border: 1px solid rgba(0,0,0,0.05);
  text-align: center;
  cursor: default;
  pointer-events: none;
  .transition(all 200ms ease);
  
  background-color: rgba(0, 128, 128, 0.6);
}

.at_num,
.at_details {
  position: absolute;
  font-size: 4px;
  color: rgba(255,255,255,0.5);
  opacity: 0;
}

.at_num {
  top: 4px;
  right: 5px;
}

.symbol {
  position: absolute;
  top: 50%;
  left: 0px;
  right: 0px;
  margin-top: -4px;
  font-size: 9px;
  line-height: 1;
  height: 9px;
  color: rgba(255,255,255,0.9);
}

.at_details {
  bottom: 0px;
  left: 0px;
  right: 0px;
}

// styles based on nth-child
.cell:nth-child(-n+2) .element,
.cell:nth-child(n+13) .element {
  background-color: rgba(0, 160, 96, 0.6);
}

.cell:nth-child(1) .element,
.periodic-row:nth-child(2) .cell:nth-child(n+14) .element,
.periodic-row:nth-child(3) .cell:nth-child(n+15) .element,
.periodic-row:nth-child(4) .cell:nth-child(n+16) .element,
.periodic-row:nth-child(5) .cell:nth-child(n+17) .element {
  background-color: rgba(0, 192, 64, 0.6);
}

.periodic-row:nth-child(-n+6) .cell:nth-child(18) .element {
  background-color: rgba(64, 192, 0, 0.6);
}

.periodic-row:nth-child(n+9) .element {
  background-color: rgba(0, 96, 160, 0.6);
}

// hover styles
.cell:nth-child(-n+2):hover .element,
.cell:nth-child(n+13):hover .element {
  background-color: rgba(0, 160, 96, 0.9);
}

.cell:nth-child(1):hover .element,
.periodic-row:nth-child(2) .cell:nth-child(n+14):hover .element,
.periodic-row:nth-child(3) .cell:nth-child(n+15):hover .element,
.periodic-row:nth-child(4) .cell:nth-child(n+16):hover .element,
.periodic-row:nth-child(5) .cell:nth-child(n+17):hover .element {
  background-color: rgba(0, 192, 64, 0.9);
}

.periodic-row:nth-child(-n+6) .cell:nth-child(18):hover .element {
  background-color: rgba(64, 192, 0, 0.9);
}

.periodic-row:nth-child(n+9) .cell:hover .element {
  background-color: rgba(0, 96, 160, 0.9);
}

// hover state positioning
// left hand column
.cell:nth-child(1) .element {
  .transform-origin(0 50%);
}

// right hand column
.cell:nth-child(18) .element {
  .transform-origin(100% 50%);
}

// bottom row
.periodic-row:nth-child(10) .cell .element {
  .transform-origin(50% 100%);
}

// top left corner
.periodic-row:nth-child(1) .cell:nth-child(1) .element {
  .transform-origin(0 0);
}

// top right corner
.periodic-row:nth-child(1) .cell:nth-child(18) .element {
  .transform-origin(100% 0);
}

// bottom right corner
.periodic-row:nth-child(10) .cell:nth-child(18) .element {
  .transform-origin(100% 100%);
}

// Media queries to change size of table
// small tablet portrait
@media (min-width: 600px) {
  .periodic {
    height: 460px;
    margin-right: -2px;
  }
  
  .element {
    right: 2px;
    bottom: 2px;
  }
  
  .at_num,
  .at_details {
    font-size: 4px;
    opacity: 1;
  }

  .symbol {
    margin-top: -28px;
    font-size: 16px;
    font-weight: bold;
    line-height: 30px;
    height: 30px;
    color: rgba(255,255,255,0.75);
    text-shadow: 0 0 4px rgba(255,255,255,0.5);
  }
}

// tablet landscape or small laptop
@media (min-width: 800px) {
  .periodic {
    height: 540px;
  }

  .symbol {
    font-size: 20px;
  }
}

// normal screen
@media (min-width: 992px) {
  .periodic {
    height: 680px;
  }
  
  .at_num,
  .at_details {
    font-size: 5px;
  }

  .symbol {
    font-size: 24px;
  }
}

// large screen
@media (min-width: 1200px) {
  .periodic {
    height: 610px;
    width: 1550px;
    margin: 0 auto;
  }
  
  .at_num,
  .at_details {
    font-size: 12px;
  }

  .symbol {
    font-size: 24px;
  }
}


.tooltip {
  display: block !important;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  background: black;
  color: white;
  border-radius: 16px;
  padding: 5px 10px 4px;
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: black;
  z-index: 1;
}

.tooltip[x-placement^="top"] {
  margin-bottom: 5px;
}

.tooltip[x-placement^="top"] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="bottom"] {
  margin-top: 5px;
}

.tooltip[x-placement^="bottom"] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="right"] {
  margin-left: 5px;
}

.tooltip[x-placement^="right"] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^="left"] {
  margin-right: 5px;
}

.tooltip[x-placement^="left"] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip.popover .popover-inner {
  background: #f9f9f9;
  color: black;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 5px 30px rgba(black, .1);
}

.tooltip.popover .popover-arrow {
  border-color: #f9f9f9;
}

.tooltip[aria-hidden='true'] {
  visibility: hidden;
  opacity: 0;
  transition: opacity .15s, visibility .15s;
}

.tooltip[aria-hidden='false'] {
  visibility: visible;
  opacity: 1;
  transition: opacity .15s;
}


</style>
