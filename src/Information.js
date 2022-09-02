import React from 'react'
import Image from './assets/001.png'

export default function Information({onClick}) {
    return (
        <div className='modal' onClick={onClick}>
            <div className='modal-overplay'></div>
            <div className='modal-body'>
                <div className='modal-img'>
                    <img src={Image} alt='pokemon'></img>
                    <p>Bulbar #001</p>
                </div>
                <div className='modal-info'>
                    <p className='modal-info-text'>There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.</p>
                    <div className='modal-info-statistic'>
                        <div className='modal-info-statistic-height'>
                            <h2>Height</h2>
                            <p>1.5</p>
                        </div>
                        <div className='modal-info-statistic-weight'>
                            <h2>Weight</h2>
                            <p>4.02</p>
                        </div>
                        <div className='modal-info-statistic-ability'>
                            <h2>Ability</h2>
                            <p children='over-grown' />
                        </div>
                        <div className='modal-info-statistic-experience'>
                            <h2>Experience</h2>
                            <p>64</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
