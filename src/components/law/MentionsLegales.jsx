import { Button } from 'react-bootstrap';
import Aside from '../courses/helpers/Aside';
import CustomHelmet from '../immutable/seo/CustomHelmet';
import Constants from '../immutable/Constants';

import PagesConstants from '../immutable/nav/PagesConstants';
import MainTitle from '../immutable/MainTitle';
import { NavLink } from 'react-router-dom';
import pathBuilder from '../helpers/pathBuilder';
import MainSubTitle from '../immutable/MainSubTitle';
import Link from '../immutable/nav/Link';
import './Law.css';

const MentionsLegales = () => {

    var title = 'Mentions légales';
    var metaContent = 'Mentions légales : hébergement et contact.';
    
    var ogType = "Cookies politics"

    return  <div className='Law'>
                <CustomHelmet title={title} metaContent={metaContent} canonicalUrl={`${Constants.WEB_APP_PREFIX}${PagesConstants.PREFIX}${PagesConstants.COOKIES_POLITICS}`} ogType={ogType}/>

                <div className="FlexButton">
                    <NavLink to={pathBuilder(PagesConstants.HOME)}>
                        <Button className="DefaultButton GreenButton" >
                            Retour à l'accueil
                        </Button> 
                    </NavLink>
                </div> 
                <MainTitle title={"Mentions légales"} />
                <MainSubTitle title={"Hébergement du site"} />
                <Aside>
                    <p>Ce site est hébergé par <Link url={"https://pages.github.com/"} external>Github pages</Link>.</p>
                </Aside>

                <MainSubTitle title={"Directeur de la publication"} />
                <Aside>
                    <p>Mr DOUINEAU Josselin.</p>
                    <p>00336 25 45 01 76</p>
                </Aside>
            </div>
}

export default MentionsLegales;