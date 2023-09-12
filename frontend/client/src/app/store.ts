import {configureStore} from '@reduxjs/toolkit'
import wishlistCounterSlice from '../features/counter/wishlistCounterSlice'
import productsSlice from '../features/products/productsSlice'


const store = configureStore({
    reducer:{
        products:productsSlice,
        wishlist:wishlistCounterSlice,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store;