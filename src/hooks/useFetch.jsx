import { useState, useEffect } from "react"
export const useFetch = (url) => {
  const [data, setData] = useState(null)
  useEffect(() => {
    (async () => {
      if (url) {
        const response = await fetch(url)
        if (response.ok) {
          const resData = await response.json()
          setData(resData)
        } else{
          setData(undefined)
        }
      }
    })()
  }, [url])
  return data
}