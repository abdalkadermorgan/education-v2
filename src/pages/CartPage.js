import { Button, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../store/store";

const CartPage = () => {
	const { cart } = useSelector((state) => state);

	const totalAmount = () => {
		return cart.reduce((total, item) => {
			return total + item.price;
		}, 0);
	};

	const dispatch = useDispatch();

	const onDeleteCart = (id) => {
		dispatch(Actions.SetAddedCart(cart.filter((e) => e.id !== id)));
	};

	return (
		<section className="page-section">
			<Container>
				<Row>
					<div className="col-lg-9">
						<div className="shop-cart">
							<h1>Shopping Cart</h1>
							<h2>{cart.length} Item</h2>
						</div>
						<div className="title-details">
							<div className="col-6">
								<h3>course details</h3>
							</div>
							<div className="col-3">
								<h3>PRICE</h3>
							</div>
							<div className="col-3">
								<h3>ACTION</h3>
							</div>
						</div>
						{cart.map((carts, index) => (
							<div className="shop-cart-table" key={`cartPage-${index}`}>
								<div className="col-6">
									<div className="cart-details">
										<div className="cart-img">
											<img src={carts.image_url} alt="" />
										</div>
										<div className="cart-name">
											<span className="name">{carts.title}</span>
											<span className="catigory">{carts.category}</span>
										</div>
									</div>
								</div>
								<div className="col-3">
									<div className="cart-price">
										<span>{carts.price} $</span>
									</div>
								</div>
								<div className="col-3">
									<div className="cart-action">
										<Button onClick={() => onDeleteCart(carts.id)}>
											remove
										</Button>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className="col-lg-3">
						<div className="shop-cart">
							<h1>Order Summary</h1>
						</div>
						<div className="total-cost">
							<span>TOTAL cost</span>
							<span>{totalAmount()} $</span>
						</div>
						<div className="total-amount">
							<span>TOTAL AMOUNT</span>
							<span>{totalAmount()} $</span>
						</div>
						<button className="btn btn-success">Checkout</button>
					</div>
				</Row>
			</Container>
		</section>
	);
};

export default CartPage;
