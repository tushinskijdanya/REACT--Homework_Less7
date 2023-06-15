import { Link } from "react-router-dom";

function Products () {
    return (
        <div className="products-container">
            <h2 className="pages-text">Sorry, we are closed!</h2>
            <div>
                <p className="secret-text">But if you really need to spend money, 
                    I suggest you use our secret store! Only tsss, no one!
                </p>
                <Link className="secret-link" to="/secret">...transition to a secret place</Link>
            </div>
        </div>
    )
}

export default Products;