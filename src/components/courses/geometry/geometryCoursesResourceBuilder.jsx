import GeometryCoursesConstants from './GeometryCoursesConstants';
import getCircleChapters from './circle/getCircleChapters';
import getConeChapters from './cone/getConeChapters';
import getQuadrilatereChapters from './quadrilatere/getQuadrilatereChapters';
import getSphereChapters from './sphere/getSphereChapters';
import getTriangleChapters from './triangle/getTriangleChapters';

function geometryCoursesResourceBuilder() {

    var coursesItems = [];
    var i = 0;

    var triangle = {
      id: i++,
      title: 'Le triangle',
      metaContent: 'La présentation du triangle : ses caractéristiques et propriétés.',
      relativePath: GeometryCoursesConstants.TRIANGLE,
      underChapters: getTriangleChapters()
    }

    var circle = {
      id: i++,
      title: 'Le cercle',
      metaContent: 'La présentation du cercle : surface et volume.',
      relativePath: GeometryCoursesConstants.CIRCLE,
      underChapters: getCircleChapters()
    }

    var sphere = {
      id: i++,
      title: 'La sphère',
      metaContent: 'La présentation de la sphère : surface et volume.',
      relativePath: GeometryCoursesConstants.SPHERE,
      underChapters: getSphereChapters()
    }

    var quadrilateres = {
      id: i++,
      title: 'Les quadrilatères',
      metaContent: 'Les quadrilatères : le carré, le cube.',
      relativePath: GeometryCoursesConstants.QUADRILATERES,
      underChapters: getQuadrilatereChapters()
    }

    var cone = {
      id: i++,
      title: 'Le cône',
      metaContent: 'Le cône : surface et volume.',
      relativePath: GeometryCoursesConstants.CONE,
      underChapters: getConeChapters()
    }

    coursesItems.push(
        triangle,
        circle,
        sphere,
        quadrilateres,
        cone
    );

    return coursesItems;

}

export default geometryCoursesResourceBuilder;