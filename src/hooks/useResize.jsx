import { useState, useEffect } from "react"
export const useResize = () => {
    const [size, setSize] = useState()
    useEffect(() => {
        const handler = () => setSize(`${window.innerHeight}  x  ${window.innerWidth}`)
        window.addEventListener('resize', handler)
        return () => window.removeEventListener('resize', handler)
    }, [])
    return size
}