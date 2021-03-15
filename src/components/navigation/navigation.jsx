
import React from 'react';
import '../navigation/navigation.css';
import '../css/bootstrap.css';
import '../css/animate.css';

export const Navigation = (props) => {

    return (
       <main>
            <nav className = 'nav navbar navigation'>
                <div className = 'container'> 
                    <div className="row">
                    
                        <div className="col col-sm-6">
                            <p className = 'btn btn-primary'>
                                We are in   {props.date }
                            </p>
                        </div>
                        <div className="col col-sm-6">
                            <p className = 'btn btn-danger animated infinite bounce' >
                                More Life
                            </p>
                        </div> 
                        
                    </div>
                
                </div>
            </nav>

        


        </main>   
       
    );
};

