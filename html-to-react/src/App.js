import React from 'react'

import Navbar from './Navbar'
import Jumbo from './Jumbo'
import About from './About'
import Cardsection from './Cardsection'
import Footer from './Footer'

const App = () => {
    return (
        <div>
            <Navbar />
            <Jumbo />
            <About />
            <Cardsection />
            <Footer />
        </div>
    )
}

export default App