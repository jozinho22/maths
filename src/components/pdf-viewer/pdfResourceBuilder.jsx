import aspirisouffle from './albums/aspirisouffle.pdf'; 
import bigBang from './albums/bigBang.pdf'; 
import chronologicon from './albums/chronologicon.pdf';
import economicon from './albums/economicon.pdf';
import energetiquementVotre from './albums/energetiquementVotre.pdf';
import geometricon from './albums/geometricon.pdf';
import joyeuseApo from './albums/joyeuseApo.pdf';
import mecavol from './albums/mecavol.pdf';
import milleEtUnenuits from './albums/milleEtUnenuits.pdf';
import murDuSilence from './albums/murDuSilence.pdf';
import pourQqesAmperesDePlus from './albums/pourQqesAmperesDePlus.pdf'; 
import spondyloscope from './albums/spondyloscope.pdf'; 
import topologicon from './albums/topologicon.pdf'; 
import tourDuMondeEn80jours from './albums/tourDuMondeEn80jours.pdf'; 
import toutEstRelatif from './albums/toutEstRelatif.pdf'; 
import trouNoir from './albums/trouNoir.pdf'; 

function pdfResourceBuilder() {

    var pdfItems = [];
    var i = 0;

    var delimAerodynamics = {
      id: i++,
      title: 'Aérodynamique'
    }

    var pdfAspi = {
      id: i++,
      filePath: './albums/aspirisouffle.pdf',
      title: 'L\'aspirisouffle',
      metaContent: 'L\'aspririsouffle : une bande dessinée pour comprendre les principes qui soutendent la capacité des appareils à voler dans les airs.',
      pdfFile : aspirisouffle,
      relativePath: '/l-aspirisouffle'
    }

    var pdfMecaVol = {
      id: i++,
      filePath: './albums/mecavol.pdf',
      title: 'Mécavol',
      metaContent: 'Mécavol : une bande dessinée pour appréhender les principes du vol plané et de la portance par une initiation au deltaplane et au parapente.',
      pdfFile : mecavol,
      relativePath: '/mecavol'
    }

    var pdfTourDuMondeEn80jours = {
      id: i++,
      filePath: './albums/tourDuMondeEn80jours.pdf',
      title: 'Le tour du monde en 80 jours',
      metaContent: 'Le tour du monde en 80 jours : une bande dessinée avec une introduction aux montages de fusées et aux principes physiques de lancement et navigation (mise en orbite, rentrée atmosphérique, vitesse de libération...etc.).',
      pdfFile : tourDuMondeEn80jours,
      relativePath: '/le-tour-du-monde-en-80-jours'
    }

    var pdfChrono = {
      id: i++,
      filePath: './albums/chronologicon.pdf',
      title: 'Le chronologicon',
      metaContent: 'Le chronologicon: une bande dessinée pour comprendre les principes du temps, du mouvement des particules, de l\'entropie et des univers jumeaux.',
      pdfFile : chronologicon,
      relativePath: '/le-chronologicon'
    }

    var delimEcoEnergie = {
      id: i++,
      title: 'Économie-Énergie'
    }

    var pdfEco = {
      id: i++,
      filePath: './albums/economicon.pdf',
      title: 'L\' économicon',
      metaContent: 'L\'économicon : une bande dessinée modélisant les principes de base de l\'économie avec une approche historique et scientifique.',
      pdfFile : economicon,
      relativePath: '/l-economicon'
    }
    var pdfEnerg = {
      id: i++,
      filePath: './albums/energetiquementVotre.pdf',
      title: 'Énergétiquement vôtre',
      metaContent: 'Énergetiquement vôtre : une bande dessinée pour avoir une introduction à l\'énergie nucléaire avec notamment une proposition de fusion avec du Bore et de l\'Hydrogène.',
      pdfFile : energetiquementVotre,
      relativePath: '/energetiquement-votre'
    }

    var delimGeomTopo = {
      id: i++,
      title: 'Géométrie-topologie'
    }
   
    var pdfMilleEtUneNuits = {
      id: i++,
      filePath: './albums/milleEtUnenuits.pdf',
      title: 'Les 1001 nuits scientifiques',
      metaContent: 'Les 1001 nuits scientifiques : une bande dessinée nous amenant à résoudre de nombreuses tours de magie mathématiques, en nous immergeant dans l\'univers des 1001 nuits.',
      minTitle: 'Les 1001 nuits...',
      pdfFile : milleEtUnenuits,
      relativePath: '/les-mille-et-une-nuits-scientifiques'
    }

    var pdfGeo = {
      id: i++,
      filePath: './albums/geometricon.pdf',
      title: 'Le géometricon',
      metaContent: 'Le géometricon : une bande dessinée avec une approche historique et expérimentale de la géométrie, avec un plongeon dans l\'époque d\'Euclide.',
      pdfFile : geometricon,
      relativePath: '/le-geometricon'
    }

    var delimPhysique = {
      id: i++,
      title: 'Physique'
    }

    var pdfMurSilence = {
      id: i++,
      filePath: './albums/murDuSilence.pdf',
      title: 'Le mur du silence',
      metaContent: 'Le mur du silence : une bande dessinée nous amenant à comprendre les principes de base de la magnéto-hydro-dynamique (MHD) par une série d\'éxpérimentations mettant en jeu l\'impact de l\'électro-magnétisme dans l\'écoulement d\'un fluide.',
      pdfFile : murDuSilence,
      relativePath: '/le-mur-du-silence'
    }

    var pdfPourQqesAmperes = {
      id: i++,
      filePath: './albums/pourQqesAmperesDePlus.pdf',
      title: 'Pour quelques ampères de plus',
      metaContent: 'Pour quelques ampères de plus : une bande dessinée pour appréhender les concepts de l\'électricité (tension, intensité, résistance, forces de Laplace, moteur électrique...etc.)',
      minTitle: 'Pour quelques ampères...',
      pdfFile : pourQqesAmperesDePlus,
      relativePath: '/pour-quelques-amperes-de-plus'
    }

    var pdfTopo = {
      id: i++,
      filePath: './albums/topologicon.pdf',
      title: 'Le topologicon',
      metaContent: 'Le topologicon : une bande dessinée nous montrant différentes manipulations possibles en jouant avec des objets géométriques (ruban de Mœbius, objets contractiles, hypersphères, tore, bouteille de Klein, surface de Boy...etc.).',
      pdfFile : topologicon,
      relativePath: '/le-topologicon'
    }

    var pdfJoyeuseApo = {
      id: i++,
      filePath: './albums/joyeuseApo.pdf',
      title: 'Joyeuse apocalypse',
      metaContent: 'Joyeuse apocalypse : une bande dessinée avec une approche historique de l\'arrivée progressive de la technologie militaire et des ses conséquences sur le monde.',
      pdfFile : joyeuseApo,
      relativePath: '/joyeuse-apocalypse'
    }

    var delimCosmo = {
      id: i++,
      title: 'Cosmologie'
    }
    
    var pdfToutEstRelatif = {
      id: i++,
      filePath: './albums/toutEstRelatif.pdf',
      title: 'Tout est relatif',
      metaContent: 'Tout est relatif : une bande dessinée nous offrant une introduction à la théorie de la relativité (notamment les notions de temps relatif et de contrations des longueurs), avec une personnification de Mr Einstein en personne.',
      pdfFile : toutEstRelatif,
      relativePath: '/tout-est-relatif'
    }
    var pdfTrouNoir = {
      id: i++,
      filePath: './albums/trouNoir.pdf',
      title: 'Le trou noir',
      metaContent: 'Le trou noir : une bande dessinée proposant une approche didactique de la géométrie des trous nours (courbure de l\'espace-temps, patchwork, masse-matière, cône de lumière...etc.).',
      pdfFile : trouNoir,
      relativePath: '/le-trou-noir'
    }

    var pdfBigBang = {
      id: i++,
      filePath: './albums/bigBang.pdf',
      title: 'Le big bang',
      metaContent: 'Le Big Bang: une bande dessinée pour comprendre les conditions (température, pression, volume) présentes au commencement des temps.',
      pdfFile : bigBang,
      relativePath: '/le-big-bang'
    }

    var delimAnatomy = {
      id: i++,
      title: 'Anatomie'
    }

    var pdfSpondyloscope = {
      id: i++,
      filePath: './albums/spondyloscope.pdf',
      title: 'Le spondyloscope',
      metaContent: 'Le spondyloscope : une bande dessinée nous amenant à comprendre l\'anotomie du corps humain de manière ludique.',
      pdfFile : spondyloscope,
      relativePath: '/le-spondyloscope'
    }

    pdfItems.push(
        delimAerodynamics,
        pdfAspi,
        pdfMecaVol,
        pdfTourDuMondeEn80jours
    );
    
    pdfItems.push(
        delimCosmo,
        pdfToutEstRelatif,
        pdfTrouNoir,
        pdfBigBang
    );

    pdfItems.push(
        delimEcoEnergie,
        pdfEco,
        pdfEnerg
    );

    pdfItems.push(
        delimGeomTopo,
        pdfMurSilence,
        pdfPourQqesAmperes
    );

    pdfItems.push(
        delimPhysique,
        pdfMilleEtUneNuits,
        pdfChrono,
        pdfTopo,
        pdfGeo,
        pdfJoyeuseApo
    );

    pdfItems.push(
        delimAnatomy,
        pdfSpondyloscope
    );

    return pdfItems;

}

export default pdfResourceBuilder;