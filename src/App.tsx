import { ThemeProvider } from "./context/usetheme";
import AppNavigator from "./navigation/AppNavigator";

export default function App(){
    return(
        <ThemeProvider>
            <AppNavigator/>
        </ThemeProvider>    
    )
}