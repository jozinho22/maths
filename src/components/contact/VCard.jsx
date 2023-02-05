import React from "react";
import { Container } from "react-bootstrap";
import { ClipboardCheck } from "react-bootstrap-icons";
import photoProfil from './assets/photo-profil.jpeg';
import Link from "../immutable/nav/Link";
import Constants from "../immutable/Constants";
import CustomHelmet from "../immutable/seo/CustomHelmet";

import './VCard.css';
import HiddenTitle from "../immutable/seo/HiddenTitle";

const VCard = () => {

    const [active, setActive] = React.useState(false);

    var gdsLink = 'https://www.bretagne-grainedesens.bzh/';
    var title = 'Ma carte de visite';
    var metaContent = 'Ma carte de visite : professeur de mathématiques et développeur.';

    var hiddenTitle = 'Ma carte de visite : mon activité et comment me contacter'
    const rotateY = () => {
        setActive(!active);
    }

    return  <>            
                <CustomHelmet title={title} metaContent={metaContent} canonicalUrl={`${Constants.WEB_APP_URL}/contact/`}/>
                <HiddenTitle title={hiddenTitle} />
                <Container className="VCardContainer">
                    <p className="MainTitle">{title}</p>
                    <Container className={`VCardRecto ${active ? "Active" : ""}`} onClick={rotateY} >
                        <img src={photoProfil} />
                        <p>
                            Professeur de mathématiques à domicile depuis dix ans, j'ai décidé de créer ce site pour apporter un support documentaire aux élèves.
                            <br /><br />
                            J'ai de même eu l'opportunité de dispenser des cours aux élèves de <Link link={gdsLink} >l'école démocratique de Brocéliande</Link>.
                            <br /><br />
                            Développeur de métier par ailleurs, il est possible d'apporter une introduction à la programmation durant les cours.
                            <br /><br/>
                            
                        </p>
                        <Container className={`VCardVerso ${active ? "Active" : ""}`} onClick={rotateY} >
                            <p>
                                Cours sur Hédé (Bretagne romantique) et ses alentours.
                                <br /><br />
                                <u>Pour me contacter :</u>
                                <br />
                                <span>josselin.douineau@gmail.com</span>
                            </p>

                        </Container>
                    </Container>
                </Container>
            </>
}

export default VCard;