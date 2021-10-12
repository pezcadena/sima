import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Materia } from '../interfaces/materias';
import { Subject } from '../interfaces/subject';
import { MateriasActivas, Usuario } from '../interfaces/usuario';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  subjects : Subject[] = [];
  usuario!:Usuario;

  constructor(private _db: AngularFirestore, 
              private _authService:AuthService
  ) { }

  async getUserBasicData(){
    this.usuario = this._authService.getUserBasicData();
    if( !this.usuario ){
      await this._authService.subscribeUserBasicData().then();
      this.usuario = this._authService.getUserBasicData();
    }
  }

  // Funciones index

  saveIndex(index:number){
    var oIndex = {
      number:index
    }
    localStorage.setItem("index",JSON.stringify(oIndex));
  }

  async getIndex(){
    await this.getUserBasicData();

    let index = this.usuario.materias_activas![0].tema;
    if ( index == 0) {
      return index
    } 
    return index-1
  }

  // Funciones Materias ( mejores )

  async createSubjects(materiasActivas: MateriasActivas[] ){

    this.subjects = [];

    for (let i = 0; i < materiasActivas!.length; i++) {
      const materia = await this.getMateriaBase( materiasActivas[i].id_materia ) ;
      const contenido = await this.getContenidoBase( materia.id_contenido ) ;
      const subject : Subject = {
        name:contenido.nombre_materia,
        id:materiasActivas[i].id_materia,
        professor:materia.nombre_profesor,
        contentComplete: materiasActivas[i].tema - 1,
        contentTotal:materia.total_temas
      }
      this.subjects.push( subject );
    }
    
    console.log("Subjects Creados");
    
  }

  async getMateriaBase( idMateria:string ):Promise<Materia>{
    let data = await this._db.collection( "materias" ).doc( idMateria ).get().toPromise().then();
    return data.data() as Materia;
  }

  async getContenidoBase( idContenido:string ):Promise<any>{
    let data = await this._db.collection( "contenidos" ).doc( idContenido ).get().toPromise().then();
    return data.data() as any;
  }

  getSubjects() : Subject[] {
    return this.subjects;
  }

  getSubject(id:string):Subject{
    const find = this.subjects.find((subject:Subject) => subject.id == id);

    return find as Subject;
  }



  // Funciones de materias sobre contenido local

  getInfoMateriaLocal(id:string){

    switch (id) {
      case "aBGRf0u6mgMV28lD21ZK":
        return this.metodologia;   
      default:
        return this.metodologia;
    }
  }

  getContenidoLocal(idc:string){
    var contenido = this.contenidosMetodologia[0];
    this.contenidosMetodologia.forEach(res=>{
      if (res.content.toString()==idc) {
        contenido = res;
      }
    });

    return contenido;
  }
//IMPORTANTE:
  getTestSubject( idContent:string ){
    return this._db.collection("contenidos").doc( idContent ).get();
  }


  metodologia = {
    name:"Metodologia de la programación",
    contentTotal:10,
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
              preview:"https://drive.google.com/uc?id=1WapLGvj68kjgf_qvlhx_MmWqcAtvR8uQ",
              length:4,
              idc:113
            },
            {
              title:"Prueba de conocimientos",
              type:"Test",
              preview:"assets/img/video.png",
              length:0,
              idc:114
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
              preview:"https://drive.google.com/uc?id=1tCTk2B4UqGKz2UT2isDnD9hLspUKuyJE",
              length:4,
              idc:123
            },
            {
              title:"Prueba de conocimientos",
              type:"Test",
              preview:"assets/img/video.png",
              length:0,
              idc:124
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
              preview:"https://drive.google.com/uc?id=1pqlOdG3FHUO7ybT8C16KMax4_x5hdvDE",
              length:4,
              idc:133
            },
            {
              title:"Prueba de conocimientos",
              type:"Test",
              preview:"assets/img/video.png",
              length:0,
              idc:134
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
              preview:"https://drive.google.com/uc?id=1AxlnNpRS-cLIy--piOiI4xXzUKP034AX",
              length:4,
              idc:143
            },
            {
              title:"Prueba de conocimientos",
              type:"Test",
              preview:"assets/img/video.png",
              length:0,
              idc:144
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
              preview:"https://drive.google.com/uc?id=10Si1BllcGqSYF9JklbeRhFCJLgHG3luK",
              length:4,
              idc:153
            },
            {
              title:"Prueba de conocimientos",
              type:"Test",
              preview:"assets/img/video.png",
              length:0,
              idc:154
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
              preview:"https://drive.google.com/uc?id=1b3tfUWW8vA7rMupgy3xzIeRpTd4SbzB3",
              length:4,
              idc:163
            },
            {
              title:"Prueba de conocimientos",
              type:"Test",
              preview:"assets/img/video.png",
              length:0,
              idc:164
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
              preview:"https://drive.google.com/uc?id=1k-VlN6q9Nf2TrNOmD1YSICD1bn_FLzLU",
              length:4,
              idc:173
            },
            {
              title:"Prueba de conocimientos",
              type:"Test",
              preview:"assets/img/video.png",
              length:0,
              idc:174
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
              preview:"https://drive.google.com/uc?id=1mRxTgU_XYQ3fO0FYitOf2IONeoy1Odry",
              length:4,
              idc:183
            },
            {
              title:"Prueba de conocimientos",
              type:"Test",
              preview:"assets/img/video.png",
              length:0,
              idc:184
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
              preview:"https://drive.google.com/uc?id=1__LwW5l1N3qdTs-oSOjbNVX12r-mmqP_",
              length:4,
              idc:193
            },
            {
              title:"Prueba de conocimientos",
              type:"Test",
              preview:"assets/img/video.png",
              length:0,
              idc:194
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
              preview:"https://drive.google.com/uc?id=1VaJiFA2LrU7vdsfhywc2vB7XXFJqrAXl",
              length:4,
              idc:1103
            },
            {
              title:"Prueba de conocimientos",
              type:"Test",
              preview:"assets/img/video.png",
              length:0,
              idc:1104
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
            {
              title:"Prueba de conocimientos",
              type:"Test",
              preview:"assets/img/video.png",
              length:0,
              idc:1114
            }
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
              preview:"https://drive.google.com/uc?id=1zTTaXSm8qP8bwRrvkNnr_4n24UUgwdkf",
              length:4,
              idc:1123
            },
            {
              title:"Prueba de conocimientos",
              type:"Test",
              preview:"assets/img/video.png",
              length:0,
              idc:1124
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
      name:"Resolución de problemas en el ambito computacional",
      images:["https://drive.google.com/uc?id=1WapLGvj68kjgf_qvlhx_MmWqcAtvR8uQ"],
      references:[
        "Cairó O (2005). Metodología de la programación, Algoritmos, diagramas de flujo y programas 22(3a ed). México: Alfaomega.",
        "Joyanes A. (2008). Fundamentos de programación, Algoritmos, Estructuras de datos y Objetos (4a ed). España: Mc Graw Hill.",
        "Velasco R. (2020). Resolución de problemas algorítmicos y objetos de aprendizaje: una revisión a la literatura. México: Universidad Veracruzana.",
        "Rozanigo B., Paur B. Estrategia para la enseñanza de Algorítmica y Programación, Facultad de Ingeniería"
      ],
      video:"https://drive.google.com/file/d/1h7dzOBjqqcqViqcHMy9r2yn-U3PJryPO/preview",
      content:113
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
      name:"Analogías",
      images:["https://drive.google.com/uc?id=1tCTk2B4UqGKz2UT2isDnD9hLspUKuyJE"],
      references:[
        "Ziman B. Solución de problemas en la investigación tecnológica: I.P.N.  Escuela Superior de Ingeniería Mecánica y Eléctrica ",
        "Molero M., Salvador A., Resolución de problemas. Estrategias heurísticas."
      ],
      content:123,
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
      name:"Divide y vencerás",
      images:["https://drive.google.com/uc?id=1pqlOdG3FHUO7ybT8C16KMax4_x5hdvDE"],
      references:[
        "Chiocode"
      ],
      content:133,
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
      name:"Arquitectura funcional",
      images:["https://drive.google.com/uc?id=1AxlnNpRS-cLIy--piOiI4xXzUKP034AX"],
      references:[
        "Introducción a la programación con Octave, Teoría de programación:  Cuestión de arquitectura, https://cursorec.readthedocs.io/en/latest/teoria1.html", 
        "Guzmán E. (2019). Elementos de programación. Lima Perú: Universidad  Nacional de Educación, Facultad de Ciencias, Escuela Profesional de  Matemática e Informática.", 
        "Cairó O. (3a) (2005). Metodología de la programación, Algoritmos diagramas  de flujo y programas. México: Alfaomega grupo editorial "
      ],
      content:143,
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
      name:"Datos",
      images:["https://drive.google.com/uc?id=10Si1BllcGqSYF9JklbeRhFCJLgHG3luK"],
      references:[
        "Guzmán E. (2019). Elementos de programación. Lima Perú: Universidad  Nacional de Educación, Facultad de Ciencias, Escuela Profesional de  Matemática e Informática.",
        "Cairó O. (3a) (2005). Metodología de la programación, Algoritmos diagramas  de flujo y programas. México: Alfaomega grupo editorial."
      ],
      content:153,
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
      name:"Operadores",
      images:["https://drive.google.com/uc?id=1b3tfUWW8vA7rMupgy3xzIeRpTd4SbzB3"],
      references:[
        "Guzmán E. (2019). Elementos de programación. Lima Perú: Universidad  Nacional de Educación, Facultad de Ciencias, Escuela Profesional de  Matemática e Informática.", 
        "Cairó O. (3aedición) (2005). Metodología de la programación, Algoritmos  diagramas de flujo y programas. México: Alfaomega grupo editorial.", 
        "Joyanes A. (4a edición) (2008). Fundamentos de programación. Algoritmos,  Estructura de datos y objetos. España.", 
        "Cervantes N., Pineda C. Fundamentos de programación, expresiones,  http://www.utn.edu.ec/reduca/programacion/fundamentos/lgicas.html"
      ],
      content:163,
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
      name:"Diagramas de flujo",
      images:["https://drive.google.com/uc?id=1k-VlN6q9Nf2TrNOmD1YSICD1bn_FLzLU"],
      references:[
        "Cairó O. (3aedición) (2005). Metodología de la programación, Algoritmos  diagramas de flujo y programas. México: Alfaomega grupo editorial.",
        "Joyanes A. (4a edición) (2008). Fundamentos de programación. Algoritmos,  Estructura de datos y objetos. España. "
      ],
      content:173,
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
      name:"Pseudocódigo",
      images:["https://drive.google.com/uc?id=1mRxTgU_XYQ3fO0FYitOf2IONeoy1Odry"],
      references:[
        "Cairó O. (3aedición) (2005). Metodología de la programación, Algoritmos  diagramas de flujo y programas. México: Alfaomega grupo editorial.",
        "Joyanes A. (4a edición) (2008). Fundamentos de programación. Algoritmos,  Estructura de datos y objetos. España. "
      ],
      content:183,
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
      name:"Estructura de secuencia",
      images:["https://drive.google.com/uc?id=1__LwW5l1N3qdTs-oSOjbNVX12r-mmqP_"],
      references:[
        "Joyanes A. (4a edición) (2008). Fundamentos de programación. Algoritmos,  Estructura de datos y objetos. España."
      ],
      content:193,
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
      name:"Estructura de control",
      images:["https://drive.google.com/uc?id=1VaJiFA2LrU7vdsfhywc2vB7XXFJqrAXl"],
      references:[
        "Cairó O. (3aedición) (2005). Metodología de la programación, Algoritmos  diagramas de flujo y programas. México: Alfaomega grupo editorial.", 
        "Joyanes A. (4a edición) (2008). Fundamentos de programación. Algoritmos,  Estructura de datos y objetos. España. "
      ],
      content:1103,
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
    {
      name:"Estructuras de repetición",
      images:["https://drive.google.com/uc?id=1zTTaXSm8qP8bwRrvkNnr_4n24UUgwdkf"],
      references:[
        "Cairó O. (3aedición) (2005). Metodología de la programación, Algoritmos  diagramas de flujo y programas. México: Alfaomega grupo editorial.",
        "Rodriguez B. (2012) Fundamentos de programación, Estructura de control,  Universidad Pontificia de Salamanca ",
        "Peris R. Instrucciones repetitivas"
      ],
      content:1123,
      video:"https://drive.google.com/file/d/12-orZbOaAdovGsro41G4flftvNEJYWMh/preview"
    },
    
  ]
}
