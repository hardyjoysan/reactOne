import React from 'react';

import HomeBanner from './HomeBanner';
import Movie from './Movie';
const Home = () => {
    return (
        <div id="home">
            <HomeBanner />
            <div className="container">
                <div className="row">
                    <Movie title="Avengers: Infinity War" year="2018" description="Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality." poster="/img/posters/movie1.jpg" />
                    <Movie title="12 Strong" year="2018" description="A In the wake of the September 11 attacks, Captain Mitch Nelson leads a US Special Forces team into Afghanistan for an extremely dangerous mission. Once there, the soldiers develop an uneasy partnership with the Northern Alliance to take down the Taliban and its al-Qaida allies." poster="/img/posters/movie2.jpg" />
                    <Movie title="Free State of Jones" year="2016" description="After serving as a medic in the Civil War, Newton Knight returns home to safeguard his family. Branded as an outlaw deserter, he forms a rebellion against the corrupt Confederate government." poster="/img/posters/movie3.jpg" />
                    <Movie title="The Imitation Game" year="2014" description="British mathematician Alan Turing joins the cryptography team to help decrypt the Enigma code, but builds his own machine that is a prototype of the modern computer to decipher German codes." poster="/img/posters/movie4.jpg" />
                </div>
            </div>
            
        </div>
    );
}
export default Home;