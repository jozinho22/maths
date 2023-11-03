import { Button } from 'react-bootstrap';
import Aside from '../courses/helpers/Aside';
import CustomHelmet from '../immutable/seo/CustomHelmet';
import Constants from '../immutable/Constants';

import PagesConstants from '../immutable/nav/PagesConstants';
import MainTitle from '../immutable/MainTitle';
import { NavLink } from 'react-router-dom';
import pathBuilder from '../helpers/pathBuilder';
import './Law.css';

const Cookies = () => {

    var title = 'Politique de cookies';
    var metaContent = 'Politique de cookies : aucun cookie sur ce site.';
    
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
                <MainTitle title={"Politique de cookies"} />
                <Aside>
                    <p>Aucun cookie n'est utilisé sur ce site internet.</p>
                    <p>Cette plateforme est uniquement réservé à la consultation, et aucune donnée utilisateur ne sera demandée nulle part.</p>
                </Aside>
            </div>

}

export default Cookies;