export interface Usuario {
  avisos?: [ Aviso ];
  conexiones?: [Conexion];
  email: string;
  matricula: string;
  nombre_completo: string;
  progreso_materias: [ PgMateria ];
  materias_activas?:[ MateriasActivas ];
  test_habilidades?:any;
}

export interface Aviso {
  mensaje: string;
  visto: boolean;
}

export interface Conexion {
  fecha: number;
  duracion: number;
}

export interface MateriasActivas {
  id_materia: string,
  material: number,
  tema: number,
  unidad: number,
}

export interface PgMateria {
  id: number; //ruta de acceso
  nrc: string;
  name: string;
  professor: string;
  contentComplete: number;
  contentTotal: number;
  last_lesson: "number_0" //revisar
}

