import { useRef } from "react"
export const VideoPlayer = () => {
    const ref = useRef()
    const handlePlay = () => { ref.current.play()  }
        // NO UTILIZAR query selector es antipatron en react
        // document.querySelector('video').play()
    return(
        <div className="">
            <video controls src=""  ref={ref}></video>
            <button onClick={handlePlay}>Play</button>
        </div>
    )
}