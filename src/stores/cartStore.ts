import { CartStoreStateType, CartStoreActionsType, CartItemType } from '@/types'
import { create } from 'zustand'

const useCartStore = create<CartStoreStateType & CartStoreActionsType>()( ( set ) => ( {
    cart: [],
    hasHydrated: false,
    addToCart: ( product: CartItemType ) => set( ( state ) => {
        if ( state.cart.includes( product ) )
        
    } ),
    removeFromCart: ( idOrItem: CartItemType | string | number ) => set( ( state ) => ( {
        cart: state.cart.filter( product => {
            const compareId = typeof idOrItem === 'object' ? idOrItem.id : idOrItem
            return product.id != compareId
        } )
    } ) ),
    clearCart: () => set( { cart: [] } ),
} ) )
export default useCartStore