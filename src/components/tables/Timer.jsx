import React from 'react';

const Timer = ({maxTime, secondes, setSecondes, minutes, setMinutes, setEndTimer}) => {

    React.useEffect(()=>{

        let myInterval = setInterval(() => {

            if (secondes > 0) {
                setSecondes(secondes - 1);
            }
            if (secondes === 0) {
                if (minutes === 0) {
                    setEndTimer(true);
                    setSecondes(maxTime);
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
        <div>
        { minutes === 0 && secondes === 0 ? 
                <h3>t</h3> : 
                    <h3> temps restant : {minutes} :{secondes < 10 ?  `0${secondes}` : secondes}</h3> 
        }
        </div>
    )
}

export default Timer;