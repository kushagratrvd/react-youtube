
import { useEffect, useState } from "react"
import { ThemeProvider } from "./Contexts/Theme"
import Card from "./Components/Card"
import ThemeBtn from "./Components/Themebtn"

function App() {
  const [thememode, setThememode] = useState("light")
  
  const lightmode = () => {
    setThememode("light")
  }

  const darkmode = () => {
    setThememode("dark")
  }

  useEffect( () => {
    const theme = document.querySelector('html').classList
    theme.remove("light","dark")
    theme.add(thememode)
  }, [thememode])

  return (
    <ThemeProvider value={{thememode, lightmode,darkmode}}>
    <div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
            <Card/>
        </div>
    </div>
    </div>
    </ ThemeProvider>

  )
}

export default App
