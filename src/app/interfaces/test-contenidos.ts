import { TestContenidosResultados } from "./test-contenidos-resultados";

export interface TestContenidos {
    fecha_inicio: Date;
    fecha_termino: Date;
    unidad: number;
    tema: number;
    material: number;
    nombre_tema: string;
    tema_aprobado: boolean;
    resultados: TestContenidosResultados[];
}


