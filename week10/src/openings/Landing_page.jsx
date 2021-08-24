import { Firstname } from '../App.js';
import './LandingPage.css'


const Landing_page = () => {

    return (
        <>
            <div className="headingBox">
                <Firstname.Consumer>
                    {name => (
                        <h1>Welcome {name}! We have following openings</h1>
                    )}
                </Firstname.Consumer>
            </div>
        </>
    )
}

export default Landing_page;