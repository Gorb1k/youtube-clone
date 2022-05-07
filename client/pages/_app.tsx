import '../app/assets/styles/old-styles.sass'
import '../app/assets/styles/globals.scss'
import type {AppProps} from 'next/app'

function MyApp({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp
