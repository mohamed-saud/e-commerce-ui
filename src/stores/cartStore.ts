import { CartStoreStateType, CartStoreActionsType, CartItemType } from '@/types'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useCartStore = create<CartStoreStateType & CartStoreActionsType>()(
    persist( ( set ) => ( {
        cart: [],
        hasHydrated: false,
        addToCart: ( product: CartItemType ) =>
            set( ( state ) => {
                // return { ...state, cart: [] }
                // check if product already exists in cart
                const existing = state.cart.find( ( item ) => item.id === product.id && item.selectedColor === product.selectedColor && item.selectedSize === product.selectedSize )

                if ( existing ) {
                    // increment quantity for the existing item
                    const updatedCart = state.cart.map( ( item ) =>
                        item.id === product.id && item.selectedColor === product.selectedColor && item.selectedSize === product.selectedSize
                            ? { ...item, quantity: ( item.quantity ?? 0 ) + ( product.quantity ?? 1 ) }
                            : item
                    )
                    return { ...state, cart: updatedCart }
                } else {
                    // add new item with a default quantity of 1 if not provided
                    const newItem: CartItemType = { ...product, quantity: product.quantity ?? 1 }
                    return { ...state, cart: [ ...state.cart, newItem ] }
                }
            } ),
        removeFromCart: ( product: CartItemType ) =>
            set( ( state ) => {
                // check if product already exists in cart
                if ( ( product.quantity ?? 1 ) > 1 ) {

                    const updatedCart = state.cart.map( ( item ) =>
                        item.cartId === product.cartId ? { ...item, quantity: ( item.quantity ?? 1 ) - 1 } : item

                    )
                    return { ...state, cart: updatedCart }
                } else {
                    const newCart = state.cart.filter( p => p.cartId !== product.cartId )
                    return { ...state, cart: newCart }
                }
                // return { ...state, cart: [] }
            } ),
        clearCart: () => set( { cart: [] } ),
    } )
        , {
            name: "cart",
            storage: createJSONStorage( () => localStorage ),
        } ) )
export default useCartStore