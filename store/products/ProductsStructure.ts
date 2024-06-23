export interface Author {
    name: string;
    rank: string;
    img: string;
}

export interface Specification {
    title: string;
    data: string;
}

export interface Technology {
    name: string;
    reason: string;
}

export interface TechCollection {
    type: string;
    technologies: Technology[];
}

export interface Specifications {
    imagesCollection: string[];
    specificationsCollection: Specification[];
    techsCollections: TechCollection[];
}

export interface ProductsStructure {
    id: number;
    author: Author;
    name: string;
    image: string;
    type: string;
    slug: string;
    description: string;
    tags: string[];
    price: number;
    specifications: Specifications;
}

export const ProductsTags = ["Todo", "Landing", "E-Commerce", "Blogs", "Portfolio", "Personalizado"]