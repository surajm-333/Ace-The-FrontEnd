import React from "react"
import Main from "./components/Main"
import Content from "./components/Content"
import Footer from "./components/Footer"
import { library } from '@fortawesome/fontawesome-svg-core'
export default function App() {
    return (
        <div>
            <Main />
            <Content />
            <Footer />
        </div>
    )
}