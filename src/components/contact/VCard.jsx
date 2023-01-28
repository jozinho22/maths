import React from "react";
import { Container } from "react-bootstrap";
import photoProfil from './assets/photo-profil.jpeg';
import Link from "../immutable/nav/Link";

import './VCard.css';

const VCard = () => {

    const [active, setActive] = React.useState(false);

    var gdsLink = 'https://www.bretagne-grainedesens.bzh/';

    const rotateY = () => {
        setActive(!active);
    }

    return  <Container className="VCardContainer">
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
                            <a href="mailto:josselin.douineau@gmail.com">josselin.douineau@gmail.com</a>
                        </p>
                    </Container>
                    
                </Container>
                {/* <Container className={`VCardVerso ${active ? "Active" : ""}`} onClick={rotateY} >
                    <p>
                        Pour me contacter...
                    </p>
                </Container> */}
            </Container>
}

export default VCard;