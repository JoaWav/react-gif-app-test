




export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=Ekj7W5AbyXrw3AkbLCrfenJNfEPQ08yG`;
    const resp = await fetch(url);
    const { data } = await resp.json();



    // CONST GIFS : Recorriendo todas las imagenes pero solo retornando
    // el id, el titulo y la url.




    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;


}