import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="Home_Container">
            <div>
                <img src="https://en.testometrika.com/upload/uf/066/066f89ecf51a3df5cbb83dcebebe5d7e.svg" alt="" />
            </div>
            <div>
               IQ Test for kids from 7 to 16 year old
            </div>
            <div>
                <Link to="/testpage"><button>Start Test</button></Link>
            </div>
        </div>
    );
}

export {HomePage};