export default function ProductsRender(){
    const fakeData = [
        {
        id: 1,
        name: 'Fatsy',
        image: 'https://res.cloudinary.com/dctldwa03/image/upload/v1718647667/test-product-image_ql99de.png',
        type: 'Club de Fiestas',
        slug: 'club-fiestas-1',
        description: 'Pagina desarrollada y optimizada hacia automotoras lista para usar.',    
        tags: ['Web', 'Landing page'],
        price: 160,
      },
      {
        id: 2,
        name: 'Haller',
        image: 'https://res.cloudinary.com/dctldwa03/image/upload/v1718648243/Group_94_gamoqz.png',
        type: 'Automotora',
        slug: 'automotora-2',
        description: 'Pagina desarrollada y optimizada hacia automotoras lista para usar.',    
        tags: ['Web', 'Landing page'],
        price: 180,
      },
      {
        id: 3,
        name: 'Bugo',
        image: 'https://res.cloudinary.com/dctldwa03/image/upload/v1718648243/image_47_a3exsp.png',
        type: 'Food',
        slug: 'food-2',
        description: 'Pagina desarrollada y optimizada hacia automotoras lista para usar.',    
        tags: ['Web', 'Landing page'],
        price: 200,
      },
      {
        id: 4,
        name: 'Fatsy',
        image: 'https://res.cloudinary.com/dctldwa03/image/upload/v1718647667/test-product-image_ql99de.png',
        type: 'Club de Fiestas',
        slug: 'club-fiestas-2',
        description: 'Pagina desarrollada y optimizada hacia automotoras lista para usar.',    
        tags: ['Web', 'Landing page'],
        price: 140,
      },
    
    ]

    return(
        <>
            {
                fakeData.map( (item, index)=> (
                    <a href={`plantillas/product/` + item.slug } class="bg-white rounded-3xl max-w-[200px] min-[500px]:max-w-sm hover:text-orange-600 cursor-pointer transition-all rounded-t-xl" key={index} >
                        <div class=" object-cover rounded-t-xl overflow-hidden">
                            <img class="object-cover" src={item.image} alt="Previsualizacion de pagina web" srcset="" />
                        </div>
                        <hr class="mx-auto max-w-[80%] my-4" />
                        <span class="flex gap-2 px-2 py-1 bg-[#FFDDCB] text-xs text-orange-600 w-fit rounded-full ml-3"><i class="ri-box-3-line"></i> {item.tags[0]}</span>
                        <div class="flex flex-col gap-8 ml-2 p-4">
                            <div class="flex flex-col">
                                <h4 class="font-bold opacity-65">{item.type}</h4>
                                <p class=" opacity-35 max-w-md ">{item.description}</p>
                            </div>
                            <div class="flex justify-between">
                                <span class="font-bold">${item.price} USD</span>
                            </div>
                        </div>
                    </a>
                ) )
            }
        </>
    )
}