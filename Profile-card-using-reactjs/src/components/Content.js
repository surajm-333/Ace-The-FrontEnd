import React from "react"
import "../style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Content() {
    return (
        <section>
            <div className="about">
                <h3 className="name1">Hana Sung</h3>
                <h4 className="name2">MERN Stack developer</h4>
                <h5 className="name3">hanasung.website</h5>
                <ul className="links">
                    <li><a href="#" className="mail">Mail</a></li>
                    <li><a href="#" className="linkedin">LinkedIn</a></li>
                </ul>
                <div className="desc">
                    <h3>About</h3>
                    <p>
                    I am a MERN Stack developer with a particular interest
                    in making things simple and automating daily tasks. 
                    I try to keep up with security and best practices, 
                    and am always looking for new things to learn.
                    </p>

                    <h3>Interests</h3>
                    <p>
                    Food expert. Music scholar. Reader.
                    Internet fanatic. Bacon buff.
                    Entrepreneur.
                    Travel geek. Pop culture ninja. Coffee fanatic.
                    </p>
                </div>
            </div>
        </section>
    )
}