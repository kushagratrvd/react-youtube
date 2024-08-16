
import { useEffect, useState } from "react"
import { ThemeProvider } from "./Contexts/Theme"
import ThemeBtn from "./Components/Themebtn"
import Card from "./Components/Card"
function App() {
  const [themecolour, setthemeMode] = useState("light")

  const lightmode = ()=>{
    setthemeMode("light")
  }
  const darkmode = () =>{
    setthemeMode("dark")
  }

  useEffect( ()=>{
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(themecolour)
  },[themecolour]
  )
  return (
    <ThemeProvider value={{themecolour, lightmode,darkmode}}>
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
