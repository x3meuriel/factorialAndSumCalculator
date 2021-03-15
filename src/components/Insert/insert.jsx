import React from 'react';
import '../../components/css/bootstrap.css';
import './insert.css';


export const Insert = (props) => {
  
    
    return(

      <section id='insert_num'>
            <p className="mine input">
                <input onChange = {props.changed}  className = 'form-control' 
                placeholder = 'Type numbers from 0 -   9999'   type="text" name="changeInt" id="inputHolder"
                />
            </p>
       </section>

    ) 
    

}