import { Container } from 'react-bootstrap';

const LesBoucles = () => {

    function boucle() {
        for(var k = 0; k < 2; k++) {
            console.log(k);
        }
    }

    return (
        <div id="les-boucles">
            <p className="Title1">a) Les boucles</p>
            <p>
                Il existe deux types de boucles :
                {"\n"}    - les boucles for
                {"\n"}    - les boucles do...while.
            </p>
            <Container className="CodeContainer">
                <div className="Code">{boucle.toString()}</div>
            </Container>
            <p>
                On indique que l'on va boucler sur la variable k, initialisée à 0.
                {"\n"}Tant que k est inférieur à 2, on continue.
                {"\n"}À chaque reprise, on ajoute 1 à k.
                {"\n"}{"\n"}
                La fonction console.log(k) permet d'afficher dans la console la variable k.
                {"\n"}Voici ce que va afficher la console en sortie.
            </p>
            <Container className="CodeContainer">
                <div className="Code">
                    0{"\n"}1
                </div>
            </Container>
        </div>
    )

}

export default LesBoucles;