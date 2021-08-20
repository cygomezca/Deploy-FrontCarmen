export function addPlato(state, plato){
    const tempPlatoInCart = state.cart.find(item => item.id == plato.id);
    if(!tempPlatoInCart){
        let tempPlato = Object.assign({}, plato);
        tempPlato.qty = 1;
        state.cart.push(tempPlato);
    } else {
        tempPlatoInCart.qty += 1;
    }
}

export function removePlatoFromCart(state, plato){
    state.cart = state.cart.filter(({ id }) => id !== tempPlato.id);
}