class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        this.price -= (this.price * percent) / 100;
    }

    displayDetails() {
        return `${this.id} - ${this.name} - Rs.${this.price} - ${this.category}`;
    }
}

let products = [
    new Product(1, "Laptop", 50000, "Electronics"),
    new Product(2, "Mouse", 500, "Electronics"),
    new Product(3, "Shoes", 2000, "Fashion")
];

products[0].applyDiscount(10);

products.forEach(p => console.log(p.displayDetails()));

let expensive = products.filter(p => p.price > 1000);

console.log("Products above Rs.1000:");
expensive.forEach(p => console.log(p.displayDetails()));