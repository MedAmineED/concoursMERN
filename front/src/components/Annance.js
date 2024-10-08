import React from 'react'

const Annance = ({ data }) => {
  return (
    <section id="annonces">
    {data.map((imgEl, index) => (
        <div key={index}>
            <div className="annonce">
                <div id="photo-annonce">
                    <img src={imgEl} alt={`article${index + 1}`} />
                </div>
                <div id="infos-annonce">
                    <div id="titre-date">
                        <div className="titre-annonce">Appareil photo</div>
                        <div id="date">20 Mai 2015</div>
                    </div>
                    <p>Electronique / Sherbrooke QC</p>
                    <p>Neuf</p>
                    <h2>200 $</h2>
                </div>
            </div>
            <div className="clear" />
        </div>
    ))}
</section>
  )
}

export default Annance
