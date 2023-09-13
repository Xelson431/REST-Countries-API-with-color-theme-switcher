import { useState } from 'react';
import '../index.css';




function Nav() {
    return (
        <div className='flex  justify-between align-middle p-5 shadow-xl w-auto'>
            <h1 className="text-xl font-bold ">Where in the World?!</h1>
            <button>Darkmode</button>
        </div>
    )
}
export default Nav;