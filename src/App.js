import Layout from "./components/layout";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageOne from "./pages/pageOne";
import PageTwo from "./pages/pageTwo"
import PageThree from "./pages/pageThree";
import PageCTA from "./pages/pageCTA";

function App() {
    return (
       
            <BrowserRouter>
             <Layout>
            <Routes>
                <Route  exact path="/" element={<Home />}/>
                    
            
                <Route path="/page-one" element={  <PageOne />}/>
                  
               
                <Route path="/page-two" element={ <PageTwo />}/> 
                   
                
                <Route path="/page-three" element={ <PageThree />}/>
                   
                
                <Route path="/page-cta" element={ <PageCTA />}/>
                   
              
                </Routes>
                </Layout>
            </BrowserRouter>
      
    );
}

export default App;