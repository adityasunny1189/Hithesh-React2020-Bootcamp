import React from 'react'
import './styles.css'
import Adi from './adi.svg'

const Intro = () => (
    <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                <img class="masthead-avatar mb-5" src={Adi} alt="" />
                <h1 className="masthead-heading text-uppercase mb-0">Aditya Pathak</h1>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <p className="masthead-subheading font-weight-light mb-0">Competitive Coding - Web Development - Machine Learning</p>
            </div>
        </header>
)

export default Intro