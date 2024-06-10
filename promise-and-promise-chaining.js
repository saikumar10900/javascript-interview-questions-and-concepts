const cart = [1, 2, 3];

const validateCart = () => true;

const createOrder = (cart) => {
  return new Promise((resolve, reject) => {
    if(!validateCart(cart)){
      reject(new Error("Cart is empty"))
    }
    const orderId = '123';
    setTimeout(() => {
      resolve(orderId)
    }, 3000);
  })
}

const proceedToPayment = (orderId) => {
  return new Promise((res, rej) => res('Payment received'));
}

const updateWallet = (payment) => {
  return new Promise((res, rej) => res(100));
}

const showOrderStatus = (orderStatus) => 'Order Placed Successfully';


createOrder(cart)
.then((orderId) => {
  console.log(orderId);
  return proceedToPayment(orderId)
}).then((payment) => {
  console.log(payment)
  return updateWallet(payment)
}).then((orderStatus) => {
  console.log(orderStatus)
  console.log(showOrderStatus(orderStatus));
}).catch((err) => console.log(err));
