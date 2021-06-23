import './App.css';
import Component1 from './Components/com1';
import Component2 from './Components/com2';
import Home from './Components/home';

const showComp1 = () => {
  if(window.location.pathname==="/component1")
    return <Component1/>
}
const showComp2 = () => {
  if(window.location.pathname==="/component2")
    return <Component2/>
}
const home = () => {
  if(window.location.pathname==="/")
    return <Home/>
}
function App() {
  return (
   <div>
     <nav>
       <ul>
         <li>
         <a href="/component1">Component 1</a>
         </li>
         <li>
           <a href="/component2">Component 2</a>
         </li>
       </ul>
     </nav>
     <div>
       {home()}
       {showComp1()}
       {showComp2()}
     </div>
   </div>
  );
}

export default App;
