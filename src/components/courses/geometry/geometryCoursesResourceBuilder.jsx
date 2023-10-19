import GeometryCoursesConstants from './GeometryCoursesConstants';
import getTriangleChapters from './triangle/getTriangleChapters';

function geometryCoursesResourceBuilder() {

    var coursesItems = [];
    var i = 0;

    var triangle = {
      id: i++,
      title: 'Le triangle',
      metaContent: 'La présentation du triangle, ses caractéristiques et propriétés.',
      relativePath: GeometryCoursesConstants.TRIANGLE,
      underChapters: getTriangleChapters()
    }

    coursesItems.push(
        triangle
    );

    return coursesItems;

}

export default geometryCoursesResourceBuilder;