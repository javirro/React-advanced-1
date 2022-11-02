import { useState, useEffect } from "react"
export const useFetch = (url) => {
  const [data, setData] = useState()
  useEffect(() => {
    (async () => {
      if (url) {
        const res = await fetch(url)
        const resData = await res.json()
        setData(resData)
      }
    })()
  }, [url])
  return data
}