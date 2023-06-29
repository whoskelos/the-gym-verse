type Categoria = 'torso' | 'pierna';
export interface IEjercicio {
    _id: string;
    nombre: string;
    descripcion?: string;
    categoria: Categoria;
    zonaMuscular: string;
    series: number;
    repeticiones: number;
    videoURL: string;
    imagen?: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}