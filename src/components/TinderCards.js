import React, { useState } from 'react'
import "./TinderCards.css"
import TinderCard from 'react-tinder-card'

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
    
    const swiped = (direction,nameToDelete) => {
        console.log('You swiped: ' + direction)
        console.log('person Name : '+ nameToDelete);
        
      }
    
      const outOfFrame =(name) =>
      {
          console.log(name +'left the screen !');
          
      }
       
     
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">

            {people.map( (person)=>
            {
               return <TinderCard 
               className ="swipe"
               key = {person.name}
               onSwipe={ (direction) => swiped(direction,person.name)} 
               onCardLeftScreen={() => outOfFrame(person.name)} 
               preventSwipe={['up', 'down']}>
                   
                   <div className="card" style={{backgroundImage : `url(${person.url})` }}>
            <h3>{person.name}</h3>
                   </div>
                </TinderCard>
            })}
            </div>
            
           
           

        </div>
    )
}

export default TinderCards
