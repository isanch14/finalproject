const functions = require('firebase-functions');


exports.updateCart = functions.firestore.document('cart/{userId}').onUpdate((change, context) => {
    const cart = change.after.data()

    const total = cart.items.reduce((total, item) => {
        return total + item.quantity * item.price
    }, 0)

    change.after.ref.set(
    {
        total: total.toFixed(2),
    },
    { merge: true },
    )
})
