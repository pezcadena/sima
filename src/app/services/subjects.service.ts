import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor() { }

  getSubject(id:number){
    return this.metodologia;
  }

  getContenidos(idc:number){
    return this.contenidosMetodologia;
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
              length:5
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
              length:5
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
              length:5
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
              length:5
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
              length:5
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
              length:5
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
              length:5
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
              length:5
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
              length:5
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
              length:5
            },
          ],
          [
            {
              title:"Material Texto",
              type:"Texto",
              preview:"assets/img/video.png",
              length:5
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
    }
  ]
}
