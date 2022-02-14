import './Alert.css';

const Alert = ({show, message, component, color}) => {
 
    return (
        <>
            {show === true ?
                <div className={`${component}Alert ${color}Alert DefaultAlert`}>{message}</div> :
                    <></>
            }
        </>
    );
}

export default Alert;