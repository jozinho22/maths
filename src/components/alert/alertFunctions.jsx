const updateAlert = (show, message, color) => {
    let alertUpdate = {};
    alertUpdate.show = show;
    alertUpdate.message = message;
    alertUpdate.color = color;
    return alertUpdate;
}

const reInitAlert = () => {
    let alertUpdate = {};
    alertUpdate.show = false;
    alertUpdate.message = '';
    alertUpdate.color = '';
    return alertUpdate;
}

export {updateAlert, reInitAlert};