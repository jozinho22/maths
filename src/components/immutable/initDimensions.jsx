const initDimensions = () => {
    var dimensions = 
        [
            {className: 'CustomHeader', height: ''}, 
            {className: 'RelativeContainer', height: ''},
            {className: 'CustomFooter', height: ''}
        ];

    for(var dim of dimensions) {
        dim.height = document.getElementsByClassName(dim.className)[0].offsetHeight;
        var property = dim.className.toLowerCase();
        document.documentElement.style.setProperty(`--${property}-height`, dim.height + 'px');
    }

    return dimensions;
}

export default initDimensions;