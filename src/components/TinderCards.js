import React, { useState } from 'react'
import "./TinderCards.css"

function TinderCards() {

    const initialState = [
        {
        name: "Elon Musk",
        url : "https://media.gettyimages.com/photos/of-tesla-and-space-x-elon-musk-attends-the-2015-vanity-fair-oscar-picture-id464172224?k=6&m=464172224&s=612x612&w=0&h=M9Wf9-mcTJBLRWKFhAX_QGVAPXogzxyvZeCiIV5O3pw="
        
},
{
    name : "Diljit Dosanjh",
    url : "https://media.gettyimages.com/photos/bollywood-actor-diljit-dosanjh-poses-for-a-profile-shoot-during-the-picture-id1161863705?k=6&m=1161863705&s=612x612&w=0&h=VboRjoo1SBbM9z8KM5GN6qn5Im3xoWZbVwMG8ilWmxg="
}
]

    const [people, setPeople] = useState(initialState)
    
    return (
        <div className="tinderCards">
            
            {people.map( (person)=>
            {
               return <div className="">
                        <h1>{person.name}</h1>
                        <img src={person.url} alt="No Image"/>
                </div>
            })}
           
        </div>
    )
}

export default TinderCards
