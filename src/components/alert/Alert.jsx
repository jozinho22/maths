import './Alert.css';

const Alert = ({show, message, component, color}) => {
 
    return (
        <>
            {show === true ?
                <div className={`DefaultAlert ${component}Alert ${color}Alert`}>{message}</div> :
                    <></>
            }
        </>
    );
}

export default Alert;