interface Props {
    name: string;
    rank: string;
    img: string;
}
export default function AuthorBadge({ name, rank, img  }: Props){
    return(
        <div class="flex  gap-2 text-xs my-4 bg-[#e5e5e5] rounded-lg select-none px-4 py-2">
            <div class="w-10 overflow-hidden">
                <img src={img} alt="Foto de perfil del creador" />
            </div>
            <div class="flex flex-col relative -top-1">
                <span class="opacity-60 relative top-2">{rank}</span>
                <h5 class="text-lg font-medium">{name}</h5>
            </div>
        </div>
    )
}