import { createContext, useState } from "react"

export const ThemeContext = createContext();
// export default ThemeContext;
const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState("light");
    const toggleTheme = () =>{
        document.body.classList.toggle("dark");
        if(theme==="light"){
            setTheme("dark");
        }else{
            setTheme("light")
            document.body.classList.toggleClass("light");
        }
    }
    return(
        <ThemeContext.Provider value={{theme:theme, toggleTheme: toggleTheme}} >
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;