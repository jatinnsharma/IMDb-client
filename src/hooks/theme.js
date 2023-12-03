import { useContext } from "react"
import { ThemeContext } from "../components/context/ThemeProvider"

export const useTheme = () => useContext(ThemeContext)
