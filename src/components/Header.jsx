import React from 'react';

const Header = ({getKeyword}) => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center py-4 bg-sky-400 px-24'>
            <h2 className='text-3xl font-bold text-white'>Pokemon</h2>
            <div class="xl:w-96 mt-4 md:mt-0">
                <form onSubmit={getKeyword} className='flex'>
                    <input type="text" name='keyword' class=" border-sky-600 px-1 py-2 focus:outline-none rounded-lg border-2 max-w-xs" />
                    <button type='submit' class="bg-sky-600 px-4 py-1 ml-[-6px] rounded-r-lg hover:bg-sky-700">Search</button>
                </form>
            </div>
        </div>
    );
};

export default Header;