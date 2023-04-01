import { createContext } from "react"
const userContext = createContext(
    {
        user: {
            name: "mohan",
            email: "mohan12@gmail.com",
        }
    }

)
export default userContext