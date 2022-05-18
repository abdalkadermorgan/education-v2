import { Button, Container } from "react-bootstrap";

const CartPage = () => {

    return (
        <section className="page-section">
            <Container>
                <Row>
                    <div className="col-lg-9">
                        <div className="shop-cart">
                            <h1>Shopping Cart</h1>
                            <h2>
                                0 Item
                            </h2>
                        </div>
                        <div className="shop-cart-table">
                            <div className="col-6">
                                <div className="cart-details">
                                    <div className="cart-img">
                                        <img src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500" />
                                    </div>
                                    <div className="cart-name">
                                        <span>name</span>
                                        <span>catigory</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="cart-price">
                                    <span>123 $</span>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="cart-action">
                                    <Button>remove</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>

            </Container>
        </section>
    )

}

export default CartPage;