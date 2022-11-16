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
            <div className="btn">
                <Link to="/testpage"><button>Continue?</button></Link>
                <Link to="/testpage"><button>Start Test</button></Link>
            </div>
            <div className="text_box">
            Most IQ tests are not suitable for children, as they are originally developed for the adult population. However, if you want to know the IQ of a child between the ages of 7 and 16, there are several tests that can help you. There is an IQ test for children, developed by us, which, unlike similar ones, can also determine the IQ level of children at the age of 6 years.The child will be shown a series of three pictures arranged with some regularity. Children will need to choose pictures that are suitable for an empty cell. The first four questions should be answered together with the child so that he/she understands the essence of the task - these questions are not taken into account in the calculation of the child’s IQ. Let's get started!
            <br/>
            <br/>
            <br/>
            Author of the test:  Testometrika Team
            </div>
        </div>
    );
}

export {HomePage};