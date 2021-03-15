import React from 'react';
import '../../components/css/bootstrap.css';


export const Sum = (props) => {

    return(
        <section id = 'sum'>
            <div className="col col-sm-6 ">
                <p className = 'mine'>
                    Arithmetic Sum of {props.int} is  '{props.numberHandler  }'
                </p>        
            </div> 
       </section>
    )
} 