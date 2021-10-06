export interface TestHabilidades {
    fecha_test?: Date;
    p1_esquema?: RespuestaHabilidades;
    p2_lectura?: RespuestaHabilidades;
    p3_video?: RespuestaHabilidades;
    p4_esquema?: RespuestaHabilidades;
    p5_lectura?: RespuestaHabilidades;
    p6_video?: RespuestaHabilidades;
    contenido?: number;
}

export interface RespuestaHabilidades {
    id?:string;
    inteligencia?:string;
    respuesta?:boolean;
}