const updateAlert = (show, message) => {
    let alertUpdate = {...alert};
    alertUpdate.show = show;
    alertUpdate.message = message;
    return alertUpdate;
}

const reInitAlert = () => {
    let alertUpdate = {...alert};
    alertUpdate.show = false;
    alertUpdate.message = '';
    return alertUpdate;
}

export {updateAlert, reInitAlert};