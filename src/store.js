import Vue from 'vue'
import Vuex from 'vuex'

import elementos from './elementos.json'
import quimicaFunctions from "@/quimica";

let matrizNumerosAtomicos = [
  [1,    null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,    2],
  [3,       4, null, null, null, null, null, null, null, null, null, null,    5,    6,    7,    8,    9,   10],
  [11,     12, null, null, null, null, null, null, null, null, null, null,   13,   14,   15,   16,   17,   18],
  [19,     20,   21,   22,   23,   24,   25,   26,   27,   28,   29,   30,   31,   32,   33,   34,   35,   36],
  [37,     38,   39,   40,   41,   42,   43,   44,   45,   46,   47,   48,   49,   50,   51,   52,   53,   54],
  [55,     56, null,   72,   73,   74,   75,   76,   77,   78,   79,   80,   81,   82,   83,   84,   85,   86],
  [87,     88, null,  104,  105,  106,  107,  108,  109,  110,  111,  112,  113,  114,  115,  116,  117,  118],
  [null, null, null,   57,   58,   59,   60,   61,   62,   63,   64,   65,   66,   67,   68,   69,   70,   71],
  [null, null, null,   89,   90,   91,   92,   93,   94,   95,   96,   97,   98,   99,  100,  101,  102,  103],
]

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    elementos: elementos,
    composicionCentesimal: [],
    numberElementoOnHover: null,
  },
  mutations: {
    agregarElemento (state, elemento) {
      state.composicionCentesimal.push(elemento)
    },
    quitarElemento (state, elemento) {
      let elementoComposicionCentesimal = state.composicionCentesimal.find(e => e.elemento.number == elemento.number)
      let index = state.composicionCentesimal.indexOf(elementoComposicionCentesimal)
      if(index != -1)
        state.composicionCentesimal.splice(index, 1);
    },
    setNumberElementoOnHover (state, number) {
      state.numberElementoOnHover = number;
    }
  },
  actions: {
    agregarElemento ({ state, commit }, elemento) {     
      if(elemento == null) return;

      return new Promise((resolve, reject) => {
        let elementoExistente = state.composicionCentesimal.find(e => e.elemento.number == elemento.number);
       
        if(elementoExistente) {
          reject(`El elemento ${elementoExistente.elemento.name} ya se encuentra en la composición centesimal`);
          return;
        }
  
        commit('agregarElemento', { elemento, cantidadHallada: 0 });
        resolve("El elemento se agrego correctamente");
                
      });
    },
    quitarElemento ({ commit }, elemento) {
      if(elemento)
        commit('quitarElemento', elemento)
    }
  },
  getters: {
    getElementos (state) {
      return state.elementos;
    },
    getElementoPorNumero (state) {
      return (number) => {
        return state.elementos.find(e => e.number == number);
      }
    },
    getElementoPorPeriodoYGrupo (state, getters) {
      return (periodo, grupo) => {
        let number = matrizNumerosAtomicos[periodo - 1][grupo - 1];
        return number != null ? getters.getElementoPorNumero(number) : null;
      }
    },
    getComposicionCentesimal (state) {
      return state.composicionCentesimal;
    },
    getPorcentajeComposicionCentesimal (state) {
      if(state.composicionCentesimal.length > 0) {
        let porcentajeTotal = 0;
        state.composicionCentesimal.forEach(e => {
            porcentajeTotal += parseFloat(e.cantidadHallada)
        });
        return porcentajeTotal
      }
      return 0;
    },
    getFormulaMinima (state, getters) {
      if(getters.getComposicionCentesimal.length < 2) {
        return {
          formulaMinima: null,
          errorMsg: 'La composición debe tener al menos 2 elementos.'
        }
      }
      
      if(getters.getPorcentajeComposicionCentesimal != 100) {
        return {
          formulaMinima: null, 
          errorMsg: 'El porcentaje de la composición debe ser exactamente 100%.'
        }
      }

      return {
        formulaMinima: quimicaFunctions.calcularFormulaMinima(state.composicionCentesimal),
        errorMsg: null
      } 
    },
    getFormulaMolecular (state, getters) {
      return (masa) => {
        if(getters.getFormulaMinima.errorMsg == null) {
          return {
            formulaMolecular: quimicaFunctions.calcularFormulaMolecularAPartirDeFormulaMinima(getters.getFormulaMinima.formulaMinima, masa),
            errorMsg: null
          }
        } else {
          return {
            formulaMolecular: null,
            errorMsg: 'Primero precisamos conocer la fórmula mínima.'
          }
        }
      }
    },
    getElementoOnHover (state, getters) {
      return state.numberElementoOnHover != null ? getters.getElementoPorNumero(state.numberElementoOnHover) : null
    }
  }
})
