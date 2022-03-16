import ContactItem from './ContactItem';

const alertReducer = (alert, action) => {
    console.log(alert, action)
    switch (action.type) {
        case ContactItem.FIRSTNAME:
            return { show: true, message: "Trop, trop long !!!" }
        default:
            return alert;
    }
}

export default alertReducer;