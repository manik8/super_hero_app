import React, {useState} from 'react';
import SearchResultItem from './SearchResultItem';


export default function SearchResults(props) {
    const {superheroData = []} = props;
    return (
        <div>
            {
                superheroData.map(hero =>  <SearchResultItem data={hero} />)
            }
        </div>
    )
}
