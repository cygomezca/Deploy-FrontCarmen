export function totalCost(state){
    console.log(state.cart);
    return state.cart.reduce((accumulator, currentPlato) => {
        return (currentPlato.price * currentPlato.qty) + accumulator
    }, 0);
}