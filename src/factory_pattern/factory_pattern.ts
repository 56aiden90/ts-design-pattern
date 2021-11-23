class Factory {
    makeProduct<T extends Constructor & Product>(product: T, ...args: any[]) {
        return new product(...args);
    }
}

interface Constructor {
    new(...args: any[]): Product;
}

interface Product {
    readonly name: string;
}

class ProductOne implements Product {
    constructor(name: string) {
        this.name = name;
    }
    name: string;
}

class ProductTwo implements Product {
    name: string = "Product Two";
}

const factory = new Factory();
const productOne = factory.makeProduct(ProductOne, "Product One");
const productTwo = factory.makeProduct(ProductTwo);

console.log(productOne.name);