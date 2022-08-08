import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-between items-center py-4 bg-sky-400 px-24'>
            <h2 className='text-3xl font-bold text-white'>Pokemon</h2>
            <div class="xl:w-96">
                <div className='flex'>
                    <input type="search" class=" border-sky-600 px-1 py-2 focus:outline-none rounded-lg border-2 w-80"/>
                <button class="bg-sky-600 px-4 py-1 ml-[-6px] rounded-r-lg hover:bg-sky-700">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Header;