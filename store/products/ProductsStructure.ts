export interface ProductStructure { 
    id: number,
    name: string,
    image: string,
    type: string,
    slug: string,
    description: string,   
    tags: string[],
    price: number,
    markdownDescription: string,
}

export const ProductsTags = ["Todo", "Landing", "E-Commerce", "Blogs", "Portfolio", "Personalizado"]