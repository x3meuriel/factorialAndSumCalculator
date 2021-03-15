
import React from 'react';
import '../../components/css/bootstrap.css';



export const Factorial = (props) => {
    return(
        <section id = 'factorial'>
                        
            <div className="col col-sm-6">
                <p className = 'mine'>
                    The factorial of {props.int} is  '{props.factorial }'      
                </p>
                
            </div>
        </section>
    )
}