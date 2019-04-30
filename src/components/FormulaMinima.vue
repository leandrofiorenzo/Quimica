<template>
    <div>
        <div v-for="elementoComposicionCentesimal in composicionCentesimal" :key="elementoComposicionCentesimal.number">
            {{elementoComposicionCentesimal.elemento.name}} - {{elementoComposicionCentesimal.cantidadHallada}}
        </div>
        <div>
            {{formulaMinima}}
        </div>
    </div>
</template>

<script>
export default {
    name: "FormulaMinima",
    data () {
        return {
            composicionCentesimal: [
                {
                    cantidadHallada: 0.8,
                    elemento: {
                        "name": "Hydrogen", 
                        "appearance": "colorless gas", 
                        "atomic_mass": 1.008, 
                        "boil": 20.271, 
                        "category": "diatomic nonmetal", 
                        "color": null, 
                        "density": 0.08988, 
                        "discovered_by": "Henry Cavendish", 
                        "melt": 13.99, 
                        "molar_heat": 28.836, 
                        "named_by": "Antoine Lavoisier", 
                        "number": 1, 
                        "period": 1, 
                        "phase": "Gas", 
                        "source": "https://en.wikipedia.org/wiki/Hydrogen", 
                        "spectral_img": "https://en.wikipedia.org/wiki/File:Hydrogen_Spectra.jpg", 
                        "summary": "Hydrogen is a chemical element with chemical symbol H and atomic number 1. With an atomic weight of 1.00794 u, hydrogen is the lightest element on the periodic table. Its monatomic form (H) is the most abundant chemical substance in the Universe, constituting roughly 75% of all baryonic mass.", 
                        "symbol": "H", 
                        "xpos": 1, 
                        "ypos": 1, 
                        "shells": [
                            1
                        ],
                        "electron_configuration": "1s1",
                        "electron_affinity": 72.769,
                        "electronegativity_pauling": 2.20,
                        "ionization_energies": [
                            1312.0
                        ]
                    }
                },
                {
                    cantidadHallada: 36.5,
                    elemento: {
                        "name": "Sodium", 
                        "appearance": "silvery white metallic", 
                        "atomic_mass": 22.989769282, 
                        "boil": 1156.09, 
                        "category": "alkali metal", 
                        "color": null, 
                        "density": 0.968, 
                        "discovered_by": "Humphry Davy", 
                        "melt": 370.944, 
                        "molar_heat": 28.23, 
                        "named_by": null, 
                        "number": 11, 
                        "period": 3, 
                        "phase": "Solid", 
                        "source": "https://en.wikipedia.org/wiki/Sodium", 
                        "spectral_img": "https://en.wikipedia.org/wiki/File:Sodium_Spectra.jpg", 
                        "summary": "Sodium /\u02c8so\u028adi\u0259m/ is a chemical element with symbol Na (from Ancient Greek \u039d\u03ac\u03c4\u03c1\u03b9\u03bf) and atomic number 11. It is a soft, silver-white, highly reactive metal. In the Periodic table it is in column 1 (alkali metals), and shares with the other six elements in that column that it has a single electron in its outer shell, which it readily donates, creating a positively charged atom - a cation.", 
                        "symbol": "Na", 
                        "xpos": 1, 
                        "ypos": 3, 
                        "shells": [
                            2,
                            8, 
                            1
                        ],
                        "electron_configuration": "1s2 2s2 2p6 3s1",
                        "electron_affinity": 52.867,
                        "electronegativity_pauling": 0.93,
                        "ionization_energies": [
                            495.8,
                            4562,
                            6910.3,
                            9543,
                            13354,
                            16613,
                            20117,
                            25496,
                            28932,
                            141362,
                            159076
                        ]
                    }
                },
                {
                    cantidadHallada: 24.6,
                    elemento: {
                        "name": "Phosphorus", 
                        "appearance": "colourless, waxy white, yellow, scarlet, red, violet, black", 
                        "atomic_mass": 30.9737619985, 
                        "boil": null, 
                        "category": "polyatomic nonmetal", 
                        "color": null, 
                        "density": 1.823, 
                        "discovered_by": "Hennig Brand", 
                        "melt": null, 
                        "molar_heat": 23.824, 
                        "named_by": null, 
                        "number": 15, 
                        "period": 3, 
                        "phase": "Solid", 
                        "source": "https://en.wikipedia.org/wiki/Phosphorus", 
                        "spectral_img": null, 
                        "summary": "Phosphorus is a chemical element with symbol P and atomic number 15. As an element, phosphorus exists in two major forms\u2014white phosphorus and red phosphorus\u2014but due to its high reactivity, phosphorus is never found as a free element on Earth. Instead phosphorus-containing minerals are almost always present in their maximally oxidised state, as inorganic phosphate rocks.", 
                        "symbol": "P", 
                        "xpos": 15, 
                        "ypos": 3, 
                        "shells": [
                            2,
                            8, 
                            5
                        ],
                        "electron_configuration": "1s2 2s2 2p6 3s2 3p3",
                        "electron_affinity": 72.037,
                        "electronegativity_pauling": 2.19,
                        "ionization_energies": [
                            1011.8,
                            1907,
                            2914.1,
                            4963.6,
                            6273.9,
                            21267,
                            25431,
                            29872,
                            35905,
                            40950,
                            46261,
                            54110,
                            59024,
                            271791,
                            296195

                        ]
                    }
                },
                {
                    cantidadHallada: 38.1,
                    elemento: {
                        "name": "Oxygen", 
                        "appearance": null, 
                        "atomic_mass": 15.999, 
                        "boil": 90.188, 
                        "category": "diatomic nonmetal", 
                        "color": null, 
                        "density": 1.429, 
                        "discovered_by": "Carl Wilhelm Scheele", 
                        "melt": 54.36, 
                        "molar_heat": null, 
                        "named_by": "Antoine Lavoisier", 
                        "number": 8, 
                        "period": 2, 
                        "phase": "Gas", 
                        "source": "https://en.wikipedia.org/wiki/Oxygen", 
                        "spectral_img": "https://en.wikipedia.org/wiki/File:Oxygen_spectre.jpg", 
                        "summary": "Oxygen is a chemical element with symbol O and atomic number 8. It is a member of the chalcogen group on the periodic table and is a highly reactive nonmetal and oxidizing agent that readily forms compounds (notably oxides) with most elements. By mass, oxygen is the third-most abundant element in the universe, after hydrogen and helium.", 
                        "symbol": "O", 
                        "xpos": 16, 
                        "ypos": 2, 
                        "shells": [
                            2,
                            6
                        ],
                        "electron_configuration": "1s2 2s2 2p4",
                        "electron_affinity": 140.9760,
                        "electronegativity_pauling": 3.44,
                        "ionization_energies": [
                            1313.9,
                            3388.3,
                            5300.5,
                            7469.2,
                            10989.5,
                            13326.5,
                            71330,
                            84078.0
                        ]
                    }
                }
            ]
        }
    },
    computed: {
        formulaMinima () {
            let menorAtomosRelativos;
            composicionCentesimal.forEach(elementoComposicionCentesimal => {
                let atomosRelativos = Math.round(elementoComposicionCentesimal.cantidadHallada / elementoComposicionCentesimal.elemento.atomic_mass)
            })
        }
    }
}
</script>

