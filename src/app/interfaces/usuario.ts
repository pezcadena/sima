export interface Usuario {
  avisos?: [ Aviso ];
  conexiones?: [Conexion];
  email: string;
  matricula: string;
  nombre_completo: string;
  progreso_materias: [ PgMateria ];
  materias_activas?:any;
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

export interface PgMateria {
  id: number; //ruta de acceso
  nrc: string;
  name: string;
  professor: string;
  contentComplete: number;
  contentTotal: number;
  last_lesson: "number_0" //revisar
}

interface Materia {
  nrc: string; // 14540  -  14570
  nombre_profesor: string; // VERA - CERVANTES EUGENIA ERICA  -  SALAZAR - MARTINEZ HILARIO
  periodo: string; // OTOÑO
  anio: number; // 2021
  id_contenido: string; //id metodo
  lista_alumnos: []
}