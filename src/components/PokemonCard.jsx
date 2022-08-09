import React from 'react';

const PokemonCard = ({pokemon}) => {
    const {name,sprites,stats}=pokemon;
    return (
        <div className='max-w-xl shadow-xl py-4 px-10 bg-slate-400 rounded-md'>
            <div>
                <img className='w-full' src={sprites?.back_default} alt="" />
            </div>
            <div>
                <h2 className='text-4xl text-center font-bold'>{name}</h2>
                <div className='flex flex-col justify-between mt-4'>
                    {
                    stats&& stats.map(stat=><div className='grid grid-cols-2 max-w-xs'>
                        <h2 className='mr-2 font-semibold'>{stat?.stat?.name}</h2>
                        <p><span className='mr-4'>:</span>{stat?.base_stat}</p>
                    </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;