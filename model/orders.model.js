import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
	name: String,
	email: String,
	mobile: String,
	address: String,
});
const Order = mongoose.model("Bookings", orderSchema);

export default Order;
