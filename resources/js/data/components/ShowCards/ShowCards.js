import React from 'react'
import styled from 'styled-components'
import './styleCard.css';



const ShowCards = () => {
    return (
        <div>
            <h2>Popular Products</h2>
            <div className="grid">
                <figure className="effect-steve">
                    <img src="https://tympanus.net/Development/HoverEffectIdeas/img/29.jpg" alt="img29" />
                    <figcaption>
                        <h2>Lonely <span>Steve</span></h2>
                        <p>Steve was afraid of the Boogieman.
                        <br />
                            <button className="btn">View more</button></p>

                    </figcaption>
                </figure>
                <figure className="effect-steve">
                    <img src="https://tympanus.net/Development/HoverEffectIdeas/img/33.jpg" alt="img33" />
                    <figcaption>
                        <h2>Lonely <span>Steve</span></h2>
                        <p>Steve was afraid of the Boogieman.
                            <br />
                            <button className="btn">View more</button></p>

                    </figcaption>
                </figure>
            </div>
        </div>
    )
}

export default ShowCards
