import React from 'react';
import bg_1 from '../../images/bg_1.jpg';

function Homepage(){
    return(
        <div>
            <div className="hovereffect">
                <h1 className="alert-danger table-hover popover-body hovereffect">Welcome to Pet-Connect</h1>
            </div>
        <div className="img1">
                <img src={bg_1}  className="embed-responsive bg-transparent"/>
            
        </div>
        </div>
        
        
    )
}
export default Homepage;