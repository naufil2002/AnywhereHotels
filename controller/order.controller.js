import Order from "../model/orders.model.js";

export const placeOrder = async (req, res) => {
	// console.log(req.body);
	// res.json({ body: req.body, message: "route working" });
	try {
		const { name, email, mobile, address } = req.body;
		const createdOrder = new Order({
			name,
			email,
			mobile,
			address,
		});
		await createdOrder.save();
		res.status(201).json({ message: "Order placed successfully" });
	} catch (error) {
		console.log("Error: " + error.message);
		res.status(500).json({ message: "Internal server error" });
	}
};
