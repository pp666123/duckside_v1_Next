import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../app/pageReducer'
import plantReducer from '../app/plant/plantReducer'
import assetReducer from '@/app/asset/assetReducer'

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth:authReducer,
      plan:plantReducer,
      asset:assetReducer
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

