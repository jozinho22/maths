const navbarProcesses = () => {
}
const processNavBarTouch = (dimensions) => {
    for(var dim of dimensions) {
        var height = 0;
        if(dim.height === '') {
            height = document.getElementsByClassName(`${dim.class}`)[0].offsetHeight; 
        } else {
            height = dim.height;
        }
        var property = dim.class.toLowerCase();
        document.documentElement.style.setProperty(`--${property}-height`, height + 'px');
    }
   
}

const setDimensionsOnToggle = () => {
    var dimensions = 
        [
            {class: 'CustomHeader', height: ''}, 
            {class: 'CustomFooter', height: ''},
            {class: 'Title', height: ''}
        ];

    for(var dim of dimensions) {
        dim.height = document.getElementsByClassName(dim.class)[0].offsetHeight;
     }

    return dimensions;
}

export default navbarProcesses;
export {processNavBarTouch, setDimensionsOnToggle};