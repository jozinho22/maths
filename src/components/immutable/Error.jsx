import { Button } from 'react-bootstrap';
import MainTitle from './MainTitle';

const Error = () => {
    return (
        <div className={"Error"}>
            <MainTitle title={"Erreur"} />
            <p>Cette url ne correspond à aucune page du site...</p>
            <Button className="DefaultButton" href="/">
                Retour à la page d'accueil
            </Button>
        </div> 
    );
}

export default Error;