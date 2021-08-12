import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor() { }

  getSubject(id:number){
    return this.metodologia;
  }

  getContenidos(idc:string){
    var contenido = this.contenidosMetodologia[0];
    this.contenidosMetodologia.forEach(res=>{
      if (res.content.toString()==idc) {
        contenido = res;
      }
    });

    return contenido;
  }

  metodologia = {
    name:"Metodologia de la programación",
    profesor:"Judit Villalba",
    contentComplete:0,
    contentTotal:17,
    sections: [
      {
        name:"Diseño estructurado usando diagramas de flujo y pseudocódigo",
        parts:["Estrategias de resolución de problemas","Analogías","Divide y vencerás","Arquitectura funcional y Algoritmos","Variables computacionales","Operaciones aritméticas, lógicas y expresiones","Diagramas de flujo","Pseudocódigo, prueba o traza del algoritmo","Estructura de secuencia","Estructura de control, condicional simple","Condicional doble, condicional múltiple","Estructura de repetición"],
        select:0,
        partsContent:[
          [
            {
              title:"Material Texto",
              type:"Texto",
              preview:"assets/img/video.png",
              length:5,
              idc:111
            },
            {
              title:"Material Video",
              type:"Video",
              preview:"https://drive.google.com/thumbnail?id=1h7dzOBjqqcqViqcHMy9r2yn-U3PJryPO",
              length:5,
              idc:112
            },
            {
              title:"Material Imagen",
              type:"Imagen",
              preview:"assets/img/video.png",
              length:4
            }
          ],
          [
            {
              title:"Material Texto",
              type:"Texto",
              preview:"assets/img/video.png",
              length:5,
              idc:121
            },
            {
              title:"Material Video",
              type:"Video",
              preview:"https://drive.google.com/thumbnail?id=1776bqxdkQ0Uuu4uf1Y9kafl90_YPAogI",
              length:5,
              idc:122
            },
            {
              title:"Material Imagen",
              type:"Imagen",
              preview:"assets/img/video.png",
              length:4
            }
          ],
          [
            {
              title:"Material Texto",
              type:"Texto",
              preview:"assets/img/video.png",
              length:5,
              idc:131
            },
            {
              title:"Material Video",
              type:"Video",
              preview:"https://drive.google.com/thumbnail?id=1XRHtPGD3Pl8vKoEdOI8J6kTa5mj5bkOZ",
              length:5,
              idc:132
            },
            {
              title:"Material Imagen",
              type:"Imagen",
              preview:"assets/img/video.png",
              length:4
            }
          ],
          [
            {
              title:"Material Texto",
              type:"Texto",
              preview:"assets/img/video.png",
              length:5,
              idc:141
            },
            {
              title:"Material Video",
              type:"Video",
              preview:"https://drive.google.com/thumbnail?id=14XRmgdFk0O-Oje8CdIe8YqbJsnODj7mv",
              length:5,
              idc:142
            },
            {
              title:"Material Imagen",
              type:"Imagen",
              preview:"assets/img/video.png",
              length:4
            }
          ],
          [
            {
              title:"Material Texto",
              type:"Texto",
              preview:"assets/img/video.png",
              length:5,
              idc:151
            },
            {
              title:"Material Video",
              type:"Video",
              preview:"https://drive.google.com/thumbnail?id=15mdUgafr1Ehn56sFta4gcyT9vfz_EE_a",
              length:5,
              idc:152
            },
            {
              title:"Material Imagen",
              type:"Imagen",
              preview:"assets/img/video.png",
              length:4
            }
          ],
          [
            {
              title:"Material Texto",
              type:"Texto",
              preview:"assets/img/video.png",
              length:5,
              idc:161
            },
            {
              title:"Material Video",
              type:"Video",
              preview:"https://drive.google.com/thumbnail?id=1BJB-8SC9Me4chlyGOJztOOtYC_CLeUFz",
              length:5,
              idc:162
            },
            {
              title:"Material Imagen",
              type:"Imagen",
              preview:"assets/img/video.png",
              length:4
            }
          ],
          [
            {
              title:"Material Texto",
              type:"Texto",
              preview:"assets/img/video.png",
              length:5,
              idc:171
            },
            {
              title:"Material Video",
              type:"Video",
              preview:"https://drive.google.com/thumbnail?id=1yNlADI4WeqKAx52HDVQpzfMYkjdY5E0v",
              length:5,
              idc:172
            },
            {
              title:"Material Imagen",
              type:"Imagen",
              preview:"assets/img/video.png",
              length:4
            }
          ],
          [
            {
              title:"Material Texto",
              type:"Texto",
              preview:"assets/img/video.png",
              length:5,
              idc:181
            },
            {
              title:"Material Video",
              type:"Video",
              preview:"https://drive.google.com/thumbnail?id=14XZ2y_C1da_IKH5RJsUnFJNu6iSeiv8d",
              length:5,
              idc:182
            },
            {
              title:"Material Imagen",
              type:"Imagen",
              preview:"assets/img/video.png",
              length:4
            }
          ],
          [
            {
              title:"Material Texto",
              type:"Texto",
              preview:"assets/img/video.png",
              length:5,
              idc:191
            },
            {
              title:"Material Video",
              type:"Video",
              preview:"https://drive.google.com/thumbnail?id=1HoViVbSlCHmk-VcnIHMUdWoLP2hiuDgJ",
              length:5,
              idc:192
            },
            {
              title:"Material Imagen",
              type:"Imagen",
              preview:"assets/img/video.png",
              length:4
            }
          ],
          [
            {
              title:"Material Texto",
              type:"Texto",
              preview:"assets/img/video.png",
              length:5,
              idc:1101
            },
            {
              title:"Material Video",
              type:"Video",
              preview:"https://drive.google.com/thumbnail?id=17Ljkg9GoZxcNEgOvz5z_R5Hobik83sNy",
              length:5,
              idc:1102
            },
            {
              title:"Material Imagen",
              type:"Imagen",
              preview:"assets/img/video.png",
              length:4
            }
          ],
          [
            {
              title:"Material Texto",
              type:"Texto",
              preview:"assets/img/video.png",
              length:5,
              idc:1111
            },
          ],
          [
            {
              title:"Material Texto",
              type:"Texto",
              preview:"assets/img/video.png",
              length:5,
              idc:1121
            },
            {
              title:"Material Video",
              type:"Video",
              preview:"https://drive.google.com/thumbnail?id=12-orZbOaAdovGsro41G4flftvNEJYWMh",
              length:5,
              idc:1122
            },
            {
              title:"Material Imagen",
              type:"Imagen",
              preview:"assets/img/video.png",
              length:4
            }
          ]
        ]
      }
    ]
  }

  contenidosMetodologia = [
    {
      name:"Estrategias de resolución de problemas",
      references:[
        "Cairó O (2005). Metodología de la programación, Algoritmos, diagramas de flujo y programas 22(3a ed). México: Alfaomega.",
        "Joyanes A. (2008). Fundamentos de programación, Algoritmos, Estructuras de datos y Objetos (4a ed). España: Mc Graw Hill.",
        "Velasco R. (2020). Resolución de problemas algorítmicos y objetos de aprendizaje: una revisión a la literatura. México: Universidad Veracruzana.",
        "Rozanigo B., Paur B. Estrategia para la enseñanza de Algorítmica y Programación, Facultad de Ingeniería"
      ],
      content:111
    },
    {
      name:"Resolución de problemas en el ambito computacional",
      images:["1"],
      references:[
        "Cairó O (2005). Metodología de la programación, Algoritmos, diagramas de flujo y programas 22(3a ed). México: Alfaomega.",
        "Joyanes A. (2008). Fundamentos de programación, Algoritmos, Estructuras de datos y Objetos (4a ed). España: Mc Graw Hill.",
        "Velasco R. (2020). Resolución de problemas algorítmicos y objetos de aprendizaje: una revisión a la literatura. México: Universidad Veracruzana.",
        "Rozanigo B., Paur B. Estrategia para la enseñanza de Algorítmica y Programación, Facultad de Ingeniería"
      ],
      video:"https://drive.google.com/file/d/1h7dzOBjqqcqViqcHMy9r2yn-U3PJryPO/preview",
      content:112
    },
    {
      name:"Analogías",
      images:["1"],
      references:[
        "Ziman B. Solución de problemas en la investigación tecnológica: I.P.N.  Escuela Superior de Ingeniería Mecánica y Eléctrica ",
        "Molero M., Salvador A., Resolución de problemas. Estrategias heurísticas."
      ],
      content:121
    },
    {
      name:"Analogías",
      images:["1"],
      references:[
        "Ziman B. Solución de problemas en la investigación tecnológica: I.P.N.  Escuela Superior de Ingeniería Mecánica y Eléctrica ",
        "Molero M., Salvador A., Resolución de problemas. Estrategias heurísticas."
      ],
      content:122,
      video:"https://drive.google.com/file/d/1776bqxdkQ0Uuu4uf1Y9kafl90_YPAogI/preview"
    },
    {
      name:"Divide y vencerás",
      images:["1"],
      references:[
        "Joyanes A. Fundamentos de programación. Algoritmos, estructura de datos  y objetos, 4° edición."
      ],
      content:131
    },
    {
      name:"Divide y vencerás",
      images:["1"],
      references:[
        "Chiocode"
      ],
      content:132,
      video:"https://drive.google.com/file/d/1XRHtPGD3Pl8vKoEdOI8J6kTa5mj5bkOZ/preview"
    },
    {
      name:"Arquitectura funcional",
      images:["1"],
      references:[
        "Introducción a la programación con Octave, Teoría de programación:  Cuestión de arquitectura, https://cursorec.readthedocs.io/en/latest/teoria1.html", 
        "Guzmán E. (2019). Elementos de programación. Lima Perú: Universidad  Nacional de Educación, Facultad de Ciencias, Escuela Profesional de  Matemática e Informática.", 
        "Cairó O. (3a) (2005). Metodología de la programación, Algoritmos diagramas  de flujo y programas. México: Alfaomega grupo editorial "
      ],
      content:141
    },
    {
      name:"Arquitectura funcional",
      images:["1"],
      references:[
        "Introducción a la programación con Octave, Teoría de programación:  Cuestión de arquitectura, https://cursorec.readthedocs.io/en/latest/teoria1.html", 
        "Guzmán E. (2019). Elementos de programación. Lima Perú: Universidad  Nacional de Educación, Facultad de Ciencias, Escuela Profesional de  Matemática e Informática.", 
        "Cairó O. (3a) (2005). Metodología de la programación, Algoritmos diagramas  de flujo y programas. México: Alfaomega grupo editorial "
      ],
      content:142,
      video:"https://drive.google.com/file/d/14XRmgdFk0O-Oje8CdIe8YqbJsnODj7mv/preview"
    },
    {
      name:"Datos",
      images:["1"],
      references:[
        "Guzmán E. (2019). Elementos de programación. Lima Perú: Universidad  Nacional de Educación, Facultad de Ciencias, Escuela Profesional de  Matemática e Informática.",
        "Cairó O. (3a) (2005). Metodología de la programación, Algoritmos diagramas  de flujo y programas. México: Alfaomega grupo editorial."
      ],
      content:151
    },
    {
      name:"Datos",
      images:["1"],
      references:[
        "Guzmán E. (2019). Elementos de programación. Lima Perú: Universidad  Nacional de Educación, Facultad de Ciencias, Escuela Profesional de  Matemática e Informática.",
        "Cairó O. (3a) (2005). Metodología de la programación, Algoritmos diagramas  de flujo y programas. México: Alfaomega grupo editorial."
      ],
      content:152,
      video:"https://drive.google.com/file/d/15mdUgafr1Ehn56sFta4gcyT9vfz_EE_a/preview"
    },
    {
      name:"Operadores",
      images:["1"],
      references:[
        "Guzmán E. (2019). Elementos de programación. Lima Perú: Universidad  Nacional de Educación, Facultad de Ciencias, Escuela Profesional de  Matemática e Informática.", 
        "Cairó O. (3aedición) (2005). Metodología de la programación, Algoritmos  diagramas de flujo y programas. México: Alfaomega grupo editorial.", 
        "Joyanes A. (4a edición) (2008). Fundamentos de programación. Algoritmos,  Estructura de datos y objetos. España.", 
        "Cervantes N., Pineda C. Fundamentos de programación, expresiones,  http://www.utn.edu.ec/reduca/programacion/fundamentos/lgicas.html"
      ],
      content:161
    },
    {
      name:"Operadores",
      images:["1"],
      references:[
        "Guzmán E. (2019). Elementos de programación. Lima Perú: Universidad  Nacional de Educación, Facultad de Ciencias, Escuela Profesional de  Matemática e Informática.", 
        "Cairó O. (3aedición) (2005). Metodología de la programación, Algoritmos  diagramas de flujo y programas. México: Alfaomega grupo editorial.", 
        "Joyanes A. (4a edición) (2008). Fundamentos de programación. Algoritmos,  Estructura de datos y objetos. España.", 
        "Cervantes N., Pineda C. Fundamentos de programación, expresiones,  http://www.utn.edu.ec/reduca/programacion/fundamentos/lgicas.html"
      ],
      content:162,
      video: "https://drive.google.com/file/d/1BJB-8SC9Me4chlyGOJztOOtYC_CLeUFz/preview"
    },
    {
      name:"Diagramas de flujo",
      images:["1"],
      references:[
        "Cairó O. (3aedición) (2005). Metodología de la programación, Algoritmos  diagramas de flujo y programas. México: Alfaomega grupo editorial.",
        "Joyanes A. (4a edición) (2008). Fundamentos de programación. Algoritmos,  Estructura de datos y objetos. España. "
      ],
      content:171
    },
    {
      name:"Diagramas de flujo",
      images:["1"],
      references:[
        "Cairó O. (3aedición) (2005). Metodología de la programación, Algoritmos  diagramas de flujo y programas. México: Alfaomega grupo editorial.",
        "Joyanes A. (4a edición) (2008). Fundamentos de programación. Algoritmos,  Estructura de datos y objetos. España. "
      ],
      content:172,
      video:"https://drive.google.com/file/d/1yNlADI4WeqKAx52HDVQpzfMYkjdY5E0v/preview"
    },
    {
      name:"Pseudocódigo",
      images:["1"],
      references:[
        "Cairó O. (3aedición) (2005). Metodología de la programación, Algoritmos  diagramas de flujo y programas. México: Alfaomega grupo editorial.",
        "Joyanes A. (4a edición) (2008). Fundamentos de programación. Algoritmos,  Estructura de datos y objetos. España. "
      ],
      content:181
    },
    {
      name:"Pseudocódigo",
      images:["1"],
      references:[
        "Cairó O. (3aedición) (2005). Metodología de la programación, Algoritmos  diagramas de flujo y programas. México: Alfaomega grupo editorial.",
        "Joyanes A. (4a edición) (2008). Fundamentos de programación. Algoritmos,  Estructura de datos y objetos. España. "
      ],
      content:182,
      video:"https://drive.google.com/file/d/14XZ2y_C1da_IKH5RJsUnFJNu6iSeiv8d/preview"
    },
    {
      name:"Estructura de secuencia",
      images:["1"],
      references:[
        "Joyanes A. (4a edición) (2008). Fundamentos de programación. Algoritmos,  Estructura de datos y objetos. España."
      ],
      content:191
    },
    {
      name:"Estructura de secuencia",
      images:["1"],
      references:[
        "Joyanes A. (4a edición) (2008). Fundamentos de programación. Algoritmos,  Estructura de datos y objetos. España."
      ],
      content:192,
      video:"https://drive.google.com/file/d/1HoViVbSlCHmk-VcnIHMUdWoLP2hiuDgJ/preview"
    },
    {
      name:"Estructura de control",
      images:["1"],
      references:[
        "Cairó O. (3aedición) (2005). Metodología de la programación, Algoritmos  diagramas de flujo y programas. México: Alfaomega grupo editorial.", 
        "Joyanes A. (4a edición) (2008). Fundamentos de programación. Algoritmos,  Estructura de datos y objetos. España. "
      ],
      content:1101
    },
    {
      name:"Estructura de control",
      images:["1"],
      references:[
        "Cairó O. (3aedición) (2005). Metodología de la programación, Algoritmos  diagramas de flujo y programas. México: Alfaomega grupo editorial.", 
        "Joyanes A. (4a edición) (2008). Fundamentos de programación. Algoritmos,  Estructura de datos y objetos. España. "
      ],
      content:1102,
      video:"https://drive.google.com/file/d/17Ljkg9GoZxcNEgOvz5z_R5Hobik83sNy/preview"
    },
    {
      name:"Condicional Doble",
      images:["1"],
      references:[
        "Cairó O. (3aedición) (2005). Metodología de la programación, Algoritmos  diagramas de flujo y programas. México: Alfaomega grupo editorial.", 
        "Joyanes A. (4a edición) (2008). Fundamentos de programación. Algoritmos,  Estructura de datos y objetos. España. "
      ],
      content:1111
    },
    {
      name:"Estructuras de repetición",
      images:["1"],
      references:[
        "Cairó O. (3aedición) (2005). Metodología de la programación, Algoritmos  diagramas de flujo y programas. México: Alfaomega grupo editorial.",
        "Rodriguez B. (2012) Fundamentos de programación, Estructura de control,  Universidad Pontificia de Salamanca ",
        "Peris R. Instrucciones repetitivas"
      ],
      content:1121
    },
    {
      name:"Estructuras de repetición",
      images:["1"],
      references:[
        "Cairó O. (3aedición) (2005). Metodología de la programación, Algoritmos  diagramas de flujo y programas. México: Alfaomega grupo editorial.",
        "Rodriguez B. (2012) Fundamentos de programación, Estructura de control,  Universidad Pontificia de Salamanca ",
        "Peris R. Instrucciones repetitivas"
      ],
      content:1122,
      video:"https://drive.google.com/file/d/12-orZbOaAdovGsro41G4flftvNEJYWMh/preview"
    },
    
  ]
}
