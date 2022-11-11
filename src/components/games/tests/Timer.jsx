import React from 'react';

import "./Timer.css";
const Timer = ({maxTime, secondes, setSecondes, minutes, setMinutes, setEndTimer}) => {

    React.useEffect(()=>{

        let myInterval = setInterval(() => {

            if (secondes > 0) {
                setSecondes(secondes - 1);
            }
            if (secondes === 0) {
                if (minutes === 0) {
                    setEndTimer(true);
                    setSecondes(secondes);
                    clearInterval(myInterval);
                } else {
                    setMinutes(minutes - 1);
                    setSecondes(59);
                }
            } 
        }, 1000);

        return () => {
            clearInterval(myInterval);
        };
    });

    return (
        <div className="Timer">
            { minutes === 0 && secondes === 0 ? 
                    <p>Timer : </p> :  
                    <>
                        <p> Timer : {minutes} : {secondes < 10 ?  
                                            `0${secondes}` : 
                                                secondes}
                        </p> 
                    </>
            }
        </div>
    )
}

export default Timer;