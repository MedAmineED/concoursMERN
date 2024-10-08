import React from 'react'
import pub1 from '../images/pub.png'
import pub2 from '../images/pub2.png'


const PubPanel = () => {
  return (
    <section id="pubs">
        <div className="pub">
            <img src={pub1} alt="pub1" />
        </div>
        <div className="pub">
            <img src={pub2} alt="pub2" />
        </div>
        <div className="pub">
            <img src={pub1} alt="pub3" />
        </div>
    </section>
  )
}

export default PubPanel
