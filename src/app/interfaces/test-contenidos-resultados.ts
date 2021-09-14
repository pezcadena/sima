export interface TestContenidosResultados {
    intento:number;
    tipo_contenido_asignado: string;
    preguntas: PreguntasResultados[];
    aprobado: boolean
}

export interface PreguntasResultados{
    nombre_pregunta:string;
    correcto:boolean
}