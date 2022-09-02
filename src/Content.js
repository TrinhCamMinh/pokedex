import { useEffect, useState } from 'react'
import Pokedex from './Pokedex';
import Information from './Information';

function Content() {
    const [pokemon, setPokemon] = useState([])
    const[toggle, setToggle] = useState(false)

    const handleBackToTop = () => {
        document.body.scrollIntoView({behavior:'smooth'})
    }

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
            .then(res => res.json())
            .then(data => {setPokemon(data.results)})
    }, [])

    useEffect(() => {
        const showOnPx = 100
        const backToTopButton = document.querySelector(".top")
        const scrollContainer = () => {
            return document.documentElement || document.body
        }

        document.addEventListener('scroll', () => {
            if(scrollContainer().scrollTop > showOnPx)
                backToTopButton.classList.remove('hidden')
            else
                backToTopButton.classList.add('hidden')
        })

        return () => {
            window.removeEventListener('scroll', handleBackToTop)
        }
    }, [])

    useEffect(() => {
        var bar = document.querySelector('.progress-bar')
        const scrollContainer = () => {
            return document.documentElement || document.body;
        }
        document.addEventListener('scroll', () => {
            const scrollPercentage = (scrollContainer().scrollTop / (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *100
            bar.style.width = `${scrollPercentage}%`
        })
    }, [])

    return (
        <div className='content'>
            <div className='progress-bar'></div>
            {pokemon.map((value, index) => (
                <Pokedex value={value} index={index} key={index} onClick={() => (setToggle(!toggle))}/>
            ))}
            <div className='container-top'>
                <button className='top hidden' onClick={handleBackToTop}> Back to Top ↑ </button>
            </div>
            {toggle && <Information onClick={() => setToggle(!toggle)} />}
        </div>
    )
}

export default Content