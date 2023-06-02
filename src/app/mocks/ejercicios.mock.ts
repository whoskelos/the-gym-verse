import { IEjercicio } from "../models/ejercicio.interface";

export const EJERCICIOS: IEjercicio[] = [
    {
        id: "1",
        nombre: 'Curl biceps',
        categoria: 'torso',
        zonaMuscular: 'biceps',
        series: 3,
        repeticiones: 10,
        linkVideo: '',
        imagen: 'album-1.webp'
    },
    {
        id: "2",
        nombre: 'Ext. de triceps',
        categoria: 'torso',
        zonaMuscular: 'triceps',
        series: 3,
        repeticiones: 10,
        linkVideo: '',
        imagen: 'album-1.webp'
    },
    {
        id: "3",
        nombre: 'Squat',
        categoria: 'pierna',
        zonaMuscular: 'quadriceps',
        series: 4,
        repeticiones: 10,
        linkVideo: '',
        imagen: 'album-4.webp'
    },
    {
        id: "4",
        nombre: 'Hip-trust',
        categoria: 'pierna',
        zonaMuscular: 'Gluteo',
        series: 3,
        repeticiones: 10,
        linkVideo: '',
        imagen: 'album-4.webp'
    }
]