class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    }

    applyCoupon(code) {
        let pattern = /^(SAVE|DISC)(\d{1,2})$/;
        let match = code.match(pattern);

        let total = this.getTotal();

        if (!match) {
            console.log("Invalid coupon");
            return total;
        }

        let discount = Number(match[2]);

        if (discount > 100) {
            console.log("Invalid discount");
            return total;
        }

        return total - (total * discount / 100);
    }
}

let cart = new Cart();

cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 500, 2);
cart.addItem("Keyboard", 1500, 1);

console.log("Original Total:", cart.getTotal());

console.log("After SAVE20:", cart.applyCoupon("SAVE20"));
console.log("After DISC10:", cart.applyCoupon("DISC10"));