import { links } from "./data";

export type SectionName = typeof links[number]['name'] // el [number] significa que puede ser cualquiera de las opciones disponibles dentro del array links, y el ['name'] significa que usara los valores de la propiedad 'name'.
