function ShowCart (props) {
    return (
        <div className="cartCard-content">
            <img src={props.card.image} />
            <div>
                <p>Колличество: {props.card.cart.cart_quantity}</p>
                <p>Общая стоимость: {props.card.cart.total_cost}</p>
            </div>
        </div>
    )
}

export default ShowCart;