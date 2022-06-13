import "../public/fonts/global.css"
import type { AppProps } from "next/app"
import React, { useEffect } from "react"
import { DefaultSeo } from "next-seo"
import SEO from "../next-seo.config.js"
import { useRouter } from "next/router"
import { pageview } from "../lib/analytics"
import smoothscroll from "smoothscroll-polyfill"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()

  useEffect(() => {
    if (window) smoothscroll.polyfill()
  }, [])

  useEffect(() => {
    const handleRouteChange = (url: string) => pageview(url)

    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
