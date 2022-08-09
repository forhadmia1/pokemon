import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import PokemonCard from '../components/PokemonCard';

const Home = () => {
    const [keyword, setKeyword] = useState('')
    const [pokemon, setPokemon] = useState({})
    const getKeyword = (e) => {
        e.preventDefault()
        const key = e.target.keyword.value;
        setKeyword(key.toLowerCase())
    }

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${keyword}`)
            .then(res => {
                if(res.status===200){
                    return res.json()
                }else{
                    setPokemon({})
                }
            })
            .then(data =>setPokemon(data))
    }, [keyword])


    return (
        <div>
            <Header
                getKeyword={getKeyword}
            />
            <div className='flex flex-col justify-center items-center mt-4'>
                {
                    pokemon?.name? <PokemonCard
                            pokemon={pokemon}
                        /> : <p className='text-xl md:text-3xl font-semibold text-red-400'>NO data Found. Please try again.</p>
                }
            </div>
        </div>
    );
};

export default Home;