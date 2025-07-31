import React, {useState} from 'react'
import Search from "./assets/components/search.jsx";

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <main>
            <div className='patter'/>

            <div className='wrapper'>
                <header>
                    <img src='./hero.png' alt='Hero Banner' />
                    <h1>Find <span className='text-gradient'>movies</span> that you'll enjoy!</h1>
                </header>

                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
        </main>
    )
}
export default App
