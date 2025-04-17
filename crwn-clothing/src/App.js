import { Routes,Route,} from "react-router-dom";
import Home from "./routes/home/home-component";
import Navigation from "./routes/navigation/navigation-component";
import SignIn from "./routes/sign-in/sign-in-component";


const Shop=()=>{
  return (
    <h1>Shop Page</h1>
  )
}

const  App=() => {
  return(
    <Routes>
     <Route path="/" element={<Navigation/>}>
     <Route index element={<Home />} />
     {/*Index is used becuz the Navigation page should be there in the top of the home page (index is kept on the page which we want it to be kept) Outlet has to be kept on the Navigation*/}
     <Route path='shop' element={<Shop />} />
     <Route path="sign-in" element={<SignIn/>} />
     </Route>
    </Routes>
  )
}


export default App;
