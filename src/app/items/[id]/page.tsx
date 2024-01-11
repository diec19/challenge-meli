export default async function ItemPage({params:{id}}:{params:{id: string}}){
    const item = await fetch(`https://api.mercadolibre.com/items/${id}`).then(res=>res.json() as Promise<{
        
            id:string;
            title:string;
            thumbnail:string;
            price:number;
            currency_id:string;
            
       
      }>)

      const {plain_text} = await fetch(`https://api.mercadolibre.com/items/${id}/description`).then(res=>res.json() as Promise<{
        plain_text: string;
      }>)

    return(
        <section className="grid gap-4">
        <img alt={item.title} src={item.thumbnail}/>
        
        <p className="text-xl font-bold"
                        >{Number(item.price).toLocaleString('es-AR',{style:'currency', currency:item.currency_id})}</p>
        <p>{item.title}</p>                
        <hr/>
        <p>{plain_text}</p>
    </section>
    ) 
        
}

