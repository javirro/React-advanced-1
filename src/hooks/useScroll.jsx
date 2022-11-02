import { useState, useEffect } from "react"
export const useScroll = () => {
    const [scroll, setScroll] = useState(window.scrollY)

    useEffect(() => {
      const handler = () => setScroll(window.scrollY)
      window.addEventListener('scroll', handler)
      return () => window.removeEventListener('scroll', handler)
    },[])
    return scroll
}