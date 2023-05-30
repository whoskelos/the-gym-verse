type Categoria = 'torso' | 'pierna';

export interface IEjercicio {
    id: string;
    nombre: string;
    descripcion?: string;
    categoria: Categoria;
    zonaMuscular: string;
    series: number;
    repeticiones: number;
    linkVideo: string;
    imagen?: string;
}