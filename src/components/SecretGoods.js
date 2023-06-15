import { useState } from "react";

function SecretGoods (props) {
    const [card, setCard] = useState(props.card);

    function changeFavourite () {
        setCard((prev) => {
            let card = {...prev};
            card.favourite = !card.favourite;
            return card;
        })
    }

    function minus () {
        const id = props.idx
        setCard((prev) => {
            let card = {...prev};
            if (card.count >= 2) {
                card.count -= 1;
            } else if (card.count === 1) {
                card.basket = false;
            }
            return card;
        })

        props.setCards(prev => {
            let temp = [...prev];
            if (temp[id].basket) {
                if(temp[id].cart.cart_quantity > 1) {
                    temp[id].cart.cart_quantity -= 1;
                    temp[id].cart.total_cost = temp[id].price * temp[id].cart.cart_quantity;
                } else if (temp[id].cart.cart_quantity === 1) {
                    temp[id].cart.cart_quantity -= 1;
                    temp[id].cart.total_cost = temp[id].price * temp[id].cart.cart_quantity;;
                    temp[id].basket = false;
                }
            }
            temp[id].minus = true;
            return temp
        })
    }

    function plus () {
        const id = props.idx
        setCard((prev) => {
            let card = {...prev};
            if (card.count >= 1) {
                card.count += 1;
            }
            return card;
        })

        props.setCards(prev => {
            let temp = [...prev];
            if (temp[id].basket) {
                temp[id].cart.cart_quantity += 1;
                temp[id].cart.total_cost = temp[id].price * temp[id].cart.cart_quantity;
            }

            temp[id].minus = true;
            return temp;
        })
    }

    function putCart() {
        setCard((prev) => {
            let card = {...prev};
            card.basket = true;
            return card;
        })

        const id = props.idx
        props.setCards(prev => {
            let temp = [...prev];
            temp[id].basket = true;
            temp[id].cart.cart_quantity = 1;
            temp[id].cart.total_cost = card.price;
            return temp;
        })
    }

    return (
        <div className="card">
            <div className="pictureComplete">
                <img src={card.image} alt="goods"/>
                <div className="sticking">
                    <span className="sticking-name">Новинка</span>
                </div>
                <div className="like">
                    <img onClick={changeFavourite} src={card.favourite ? card.likeActive : card.likeDefault} alt="like" />
                </div>
            </div> 
            <div className="card-content">
                <p className="title">{card.title}</p>
                <p className="price">{card.price} ₽</p>
                <div className="counter">
                    <div onClick={putCart} className={card.basket ? "pushCart-button none" : "pushCart-button"}>
                        <span>Добавить в корзину!</span>
                    </div>
                    <div className={card.basket ? "basket" : "basket none"}>
                        <div><button onClick={minus}>-</button></div>
                        <div className="counter-constructor">
                            <div className="basket-content">
                                <p className="basket-count">{card.count}шт</p>
                                <p className="basket-title">В корзине</p>
                            </div>
                        </div>
                        <div><button onClick={plus}>+</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default SecretGoods;