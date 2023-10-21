import { Button } from 'react-bootstrap';
import MainTitle from './MainTitle';
import Constants from './Constants';

const Error = () => {
    return (
        <div className={"Error"}>
            <MainTitle title={"Erreur"} />
            <p>Cette url ne correspond à aucune page du site...</p>
            <Button className="DefaultButton" href={`${Constants.WEB_APP_URL}`}>
                Retour à la page d'accueil
            </Button>
        </div> 
    );
}

export default Error;