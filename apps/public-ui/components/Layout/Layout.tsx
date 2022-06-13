import { Body, EZ, Hamburger, Header } from "./styles"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Squeeze } from "hamburger-react"
import { Menu } from "./Menu"
import { useRouter } from "next/router"
import { Loading } from "../Reservations/Form/Loading"

export const Layout: React.FC<{children}> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const [loading, setLoading] = useState<boolean | undefined>(undefined)
  const router = useRouter()
  useEffect(() => {
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
    router.events.on("routeChangeStart", start)
    router.events.on("routeChangeComplete", end)
    router.events.on("routeChangeError", end)
    return () => {
      router.events.off("routeChangeStart", start)
      router.events.off("routeChangeComplete", end)
      router.events.off("routeChangeError", end)
    }
  }, [router])
  return loading ? (
    <Loading />
  ) : (
    <>
      <Header>
        <Link href={"/"}>
          <EZ onClick={() => setMenuOpen(false)}>EVERYTHING ZEN</EZ>
        </Link>
        <Hamburger>
          <Squeeze
            size={25}
            color={"#00263a"}
            label="Toggle navigation menu."
            toggled={menuOpen}
            toggle={setMenuOpen}
          />
        </Hamburger>
      </Header>
      <Menu isOpen={menuOpen} setIsOpen={setMenuOpen} />
      <Body>{children}</Body>
    </>
  )
}
