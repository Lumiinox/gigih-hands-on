import {useState, useEffect} from 'react';
import axios from 'axios';
import { GifComponent } from '../../components/gif';
import '../search/index.css';

export default function SearchGif(){

    const [gifs, setGifs] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const [dataStatus, setStatus] = useState(false);

    const CallGiphyForSearch = (e) => {
        e.preventDefault();
        const giphyAPI = "gggj57TzGvwZFy2wuUowjnhtlCUIlSEX"
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${giphyAPI}&q=${searchKey}&limit=12`,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response)=>{
            const searchResult = response.data.data;

            if(response){
                setGifs(searchResult);
                console.log(gifs);
                setStatus(true);
            }else{
                setStatus(false);
            }
        }).catch((e) => console.log(e));
    }

    const RenderSearchResult = () =>{
        return gifs.map((data, id) => (
            <GifComponent title={data.title} url={data.images.fixed_height.url} id={data.id} date={data.import_datetime} rating={data.rating} key={id}/>
        ))
    }

    return (
        <>
            <form onSubmit={CallGiphyForSearch}>
                <input type="text" placeholder='Search..' className='searchInput' onChange={e => setSearchKey(e.target.value)}></input>
                <button type='Submit'>Search</button>
            </form>
            {dataStatus ? <RenderSearchResult/> : <></>}
        </>
    )
}
