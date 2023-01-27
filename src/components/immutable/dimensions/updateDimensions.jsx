const updateDimensions = ( [width, height] ) => {
    window.onload = (event) => {
        var dimensions = 
        [
            {className: 'CustomHeader', height: ''}, 
            {className: 'RelativeContainer', height: ''},
            {className: 'CustomFooter', height: ''}
        ];

        for(var dim of dimensions) {
            console.log(dim)
            console.log(document)
            dim.height = document.getElementsByClassName(dim.className)[0].offsetHeight;
            var property = dim.className.toLowerCase();
            document.documentElement.style.setProperty(`--${property}-height`, dim.height + 'px');
        }
        document.documentElement.style.setProperty(`--window-width`, width + 'px');
        document.documentElement.style.setProperty(`--window-height`, height + 'px');
    
        return dimensions;
    }
    
}

export default updateDimensions;