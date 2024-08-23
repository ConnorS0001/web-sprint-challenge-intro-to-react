import React, {useEffect, useState} from 'react'

function Character({characterName, characterHome, cardId}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld

  ////////MY CODE////////////////
  const [homeState, setHomeState] = useState(false)

  function homeToggle() {
    //alert(homeState);
    setHomeState(!homeState)
  }
  ////////MY CODE////////////////


  return (
    ////////MY CODE////////////////
    <div className='character-card' id={cardId} onClick={homeToggle}>
      <h3 className='character-name'>{characterName}</h3>
        
      {/* Use the same markup with the same attributes as in the mock */
      
      ////////MY CODE////////////////
      homeState && (
          <p className='character-planet'>Planet: {characterHome}</p>
        )
      ////////MY CODE////////////////
            
      }
    </div>
  )
}

export default Character
