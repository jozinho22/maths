const getWidth = () => {
    var w = getComputedStyle(document.body).getPropertyValue('width');
    var wSliced = w.slice(0, w.length - 2);
    var wInNumbers = parseInt(wSliced);

    return wInNumbers;
}

export default getWidth;