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
    switch (idc) {
      case "111":
        return this.contenidosMetodologia[0];
      case "121":
        return this.contenidosMetodologia[1];
      case "131":
        return this.contenidosMetodologia[2];
      case "141":
        return this.contenidosMetodologia[3];
      case "151":
        return this.contenidosMetodologia[4];
      case "161":
        return this.contenidosMetodologia[5];
      case "171":
        return this.contenidosMetodologia[6];
      case "181":
        return this.contenidosMetodologia[7];
      case "191":
        return this.contenidosMetodologia[8];
      case "1101":
        return this.contenidosMetodologia[9];
      case "1111":
        return this.contenidosMetodologia[10];
      case "1121":
        return this.contenidosMetodologia[11];
      default:
        return this.contenidosMetodologia[0];
    }
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
              preview:"assets/img/video.png",
              length:5
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
              preview:"assets/img/video.png",
              length:5
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
              preview:"assets/img/video.png",
              length:5
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
              preview:"assets/img/video.png",
              length:5
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
              preview:"assets/img/video.png",
              length:5
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
              preview:"assets/img/video.png",
              length:5
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
              preview:"assets/img/video.png",
              length:5
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
              preview:"assets/img/video.png",
              length:5
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
              preview:"assets/img/video.png",
              length:5
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
              preview:"assets/img/video.png",
              length:5
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
              preview:"assets/img/video.png",
              length:5
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
      name:"Analogías",
      images:["1"],
      references:[
        "Ziman B. Solución de problemas en la investigación tecnológica: I.P.N.  Escuela Superior de Ingeniería Mecánica y Eléctrica ",
        "Molero M., Salvador A., Resolución de problemas. Estrategias heurísticas."
      ],
      content:121
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
      name:"Datos",
      images:["1"],
      references:[
        "Guzmán E. (2019). Elementos de programación. Lima Perú: Universidad  Nacional de Educación, Facultad de Ciencias, Escuela Profesional de  Matemática e Informática.",
        "Cairó O. (3a) (2005). Metodología de la programación, Algoritmos diagramas  de flujo y programas. México: Alfaomega grupo editorial."
      ],
      content:151
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
      name:"Diagramas de flujo",
      images:["1"],
      references:[
        "Cairó O. (3aedición) (2005). Metodología de la programación, Algoritmos  diagramas de flujo y programas. México: Alfaomega grupo editorial.",
        "Joyanes A. (4a edición) (2008). Fundamentos de programación. Algoritmos,  Estructura de datos y objetos. España. "
      ],
      content:171
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
      name:"Estructura de secuencia",
      images:["1"],
      references:[
        "Joyanes A. (4a edición) (2008). Fundamentos de programación. Algoritmos,  Estructura de datos y objetos. España."
      ],
      content:191
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
    }
  ]
}
