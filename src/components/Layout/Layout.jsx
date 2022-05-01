import React from "react"
import { Outlet } from "react-router-dom"

const Layout = () => {

    return(
        <div>
            <header>
                <div className="header-flex">
                    <div>
                        <h1>CALCULATOR</h1>
                    </div>

                    <div>
                        <h1>The work is done for the portfolio</h1>
                    </div>
                </div>
            </header>
            <Outlet/>
            <footer>
                <div className="footer-flex">
                    <h1>CALCULATOR</h1>
                    <h1>created by Islam Zhenishov</h1>
                </div>
            </footer>
        </div>
    )
}

export {Layout}