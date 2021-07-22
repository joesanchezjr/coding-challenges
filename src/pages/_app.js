import { Provider } from "react-redux"
import Head from "next/head"
import { store } from "../app/store"
import "../styles/globals.css"

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>Coding Challenges</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
