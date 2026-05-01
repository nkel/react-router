import { Routes, Route} from "react-router"
import Layout from "../Layout/Layout"
import Home from "../Pages/Home"
import News from "../Pages/News"
import NewsDetail from "../Pages/NewsDetail"


function MyRoutes(){
    return(

        <Routes>
            <Route path="/" element={ <Layout/> }>
                <Route index element={ <Home /> } />
                <Route path="/about" element={ <h2>about Us</h2> } />

                <Route path="/news" >
                    <Route index element={ <News /> }/>
                     <Route path=":id" element={ <NewsDetail /> } />

                </Route>
                

                <Route path="*" element={ <h1> 404 </h1> } />
            </Route>
        </Routes>
    )
}
export default MyRoutes