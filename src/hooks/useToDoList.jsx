import { useState } from "react"
export const useToDoList = () => {
    const [list, setNewList] = useState()
    return {
        get: () => list,
        add: (newElement) => setNewList([...list, newElement]),
        remove: (index) => setNewList(list.filter((_, i) => i !== index)),
    }
}