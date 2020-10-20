import React, {useState} from 'react'
import FavoriteItems from './FavoriteItems';

export default function SearchResultItem(props) {
    const {data}  = props;
    const [favorite, setFavorite] = useState([]);
    //console.log(favorite)
    // function addFavorite() {
    //     setFavorite(...favorite, favorite.concat(data));
    // }
    
    return (
        <div>
            <div className="search-results">
                <div className="left">
                    <img 
                    src={data.image.url} 
                    alt="super pic" 
                    onClick = {() => setFavorite([...favorite, data.image.url])}
                    />
                </div>
                <div className="right">
                    <h1>{data.name}</h1>
                    <div className="stats">
                        <div>Strength: {data.powerstats.strength}</div>
                        <div>Speed: {data.powerstats.speed}</div>
                        <div>Power: {data.powerstats.power}</div>
                    </div>
                </div>
            </div>
            <FavoriteItems favorite/>
        </div>
    )
}
