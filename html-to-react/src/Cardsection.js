import React from 'react'

import Card from './Card'

const Cardsection = () => (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <div className="col-4">
            <Card 
              title = "First Title"
              button = "First Button"
            />
          </div>
          <div className="col-4">
          <Card 
            title = "Second Title"
            button = "Second Button"
          />
          </div>
          <div className="col-4">
          <Card 
            title = "Third Title"
            button = "Third Button"
          />
          </div>
        </div>
      </div>
    </section>
)

export default Cardsection