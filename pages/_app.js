import '@/styles/globals.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import {persistStore} from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
let persistor=persistStore(store)
export default function App({ Component, pageProps }) {
 
  return <Provider store={store}><PersistGate persistor={persistor}>  <Component {...pageProps} /> </PersistGate> </Provider>
}
