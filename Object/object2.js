const appleStore = [
    {
        productName : "MacBook",
        productPrice : 150000,
        productLunchDate : "January 2024",
        toBuy : function () {
            console.log(`Congratulations, You buy ${this.productName}`);
        }
    },

];


console.log(appleStore[0].toBuy());
