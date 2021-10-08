import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <>
            <div>
                <div className="constructure">
                    <p id="logo">{props.title}</p>

                    <div className="searchbar">
                        <div className="form-check form-switch">
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className ="form-check-label" htmlFor="flexSwitchCheckDefault" id = "flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


Navbar.propTypes = {
    title: PropTypes.string
};

Navbar.defaultProps = {
    title: 'SHIVAMGEE'
}