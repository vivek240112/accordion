</div>




import './App.css';
import { Accordion } from './component/Accordion';
import accordion from    './component/accordion.json';
import React,{ useState } from 'react';


function App() 
{const[show , setShow] = useState(false);
  return (
          <>
    <div className="container-fluid"></div>
  {
    
   accordion.map( accordion =>{
    
       return(
           <div className="row d-flex " key={accordion.id}>
          <strong><p onClick={() => setShow(!show)}>+</p></strong>
          <h3>{accordion.question}</h3>
          </div>
          {show && <strong><p>question : {accordion.answer}</p></strong>
        }
          
          
      

       )


   })

  }  
    </>
    );
    }

export default App;








import './App.css';
// import { Accordion } from './component/Accordion';
import accordion from    './component/accordion.json';
import React,{ useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() 
{const[show , setShow] = useState(false);
  return (
          <>
          <Accordion></Accordion>
    {/* <div className="container-fluid">
  {
    
   accordion.map( accordion =>{
    
       return(
           <div className="row d-flex " key={accordion.id}>
          <strong><button type="button" onClick={() => setShow(!show)}></button></strong>
          <div className="col-lg-8 col-md-8 p-4">
          <strong><p>question : {accordion.question}</p></strong>
          <p>{accordion.answer}</p>
          
          </div>
          </div>
          
      

       )


   } )
   

    } 
    </div>  */}
    </>
    );
    }

export default App;
