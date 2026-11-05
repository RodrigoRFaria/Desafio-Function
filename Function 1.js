const cart = [10, 244, 99, 2, 20, 33, 250];
let finalValueWithDiscount = 0;
let finalValue = 0;

function calculateDiscount(price, discount) {
    const result = (price * discount) / 100;
    return result;
}

function calculateFinalValue(cart) {
    cart.forEach((value) => {
        finalValue += value;
    })};
    calculateFinalValue(cart);

    cart.forEach((value) => {

        if (value > 30) {
            const discount = calculateDiscount(value, 10);
            finalValueWithDiscount = finalValueWithDiscount + (value - discount);
        }
        else {
            finalValueWithDiscount += value;
        }
    });


    console.log(`O valor final da compra é: R$ ${finalValue.toFixed(2)},
         porém com o desconto aplicado, o valor final é: R$ ${finalValueWithDiscount.toFixed(2)}. 
         Você economizou R$ ${(finalValue - finalValueWithDiscount).toFixed(2)} no total da compra.`);