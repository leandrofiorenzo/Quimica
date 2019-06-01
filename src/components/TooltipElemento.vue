<template>
    <div class="tooltip">
        <div class="row">
            <div class="col-md-auto">
                Elemento: {{elemento.name}}
            </div>
            <div class="col-md-auto">
                Símbolo: {{elemento.symbol}}
            </div>
            <div class="col-md-auto">
                Masa atómica: {{elemento.atomic_mass}}
            </div>  
            <div class="col-md-auto">
                Fase: {{elemento.phase}}
            </div>                
            <div class="col-md-auto">
                Configuración electrónica: {{elemento.electron_configuration}}
            </div>
            <div class="col-md-auto">
                Electronegatividad: {{elemento.electronegativity_pauling}}
            </div>            
            <div class="col-md-auto">
                Categoría: {{elemento.category}}
            </div>
            <div class="col-md-auto">
                Apariencia: {{elemento.appearance}}
            </div>
            <div class="col-md-auto">
                Información: {{elemento.summary}}
            </div>
        <!-- "name": "Paladio", 
            "appearance": "blanco plateado", 
            "atomic_mass": 106.421, 
            "boil": 3236, 
            "category": "metal de transición", 
            "color": null, 
            "density": 12.023, 
            "discovered_by": "William Hyde Wollaston", 
            "melt": 1828.05, 
            "molar_heat": 25.98, 
            "named_by": null, 
            "number": 46, 
            "period": 5, 
            "phase": "solido", 
            "spectral_img": null, 
            "summary": "El paladio es un elemento químico con el símbolo Pd y el número atómico 46. Es un metal blanco plateado raro y brillante descubierto en 1803 por William Hyde Wollaston. Lo llamó así por el asteroide Pallas, que lleva el nombre del epíteto de la diosa griega Atenea, adquirida por ella cuando mató a Pallas.", 
            "symbol": "Pd", 
            "xpos": 10, 
            "ypos": 5, 
            "shells": [
                2,
                8, 
                18, 
                18
            ],
            "electron_configuration": "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10",
            "electron_affinity": 54.24,
            "electronegativity_pauling": 2.20,
            "ionization_energies": [
                804.4,
                1870,
                3177
            ] -->
            
        </div>
    </div>

</template>

<script>
export default {
    name: "TooltipElemento",
    props: {
        elemento: {
            type: Object
        }
    }
}
</script>

<style>
.tooltip {
    margin: auto;
    position: absolute;
    top: 2px;
    left: 0;
    right: 0;
    max-width: 900px;
    max-height: 320px;
    padding: 5px;
    color: white;
    background: black;
    opacity: 0.5;
    border-radius: 10px;
}
</style>
