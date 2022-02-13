import { Container } from 'react-bootstrap';

const LesBoucles = () => {

    function boucleFor1() {
        for(var k = 0; k < 2; k++) {
            console.log(k);
        }
    }

    function boucleFor1Console() {
        var output = [];
        for(var k = 0; k < 2; k++) {
            output.push({id: k, k: k});
        }
        return output;
    }

    function boucleFor2In() {
        var numbers = [2, 73, 43, 8, 4];
        for(var k in numbers) {
            console.log(k);
        }
    }

    function boucleFor2Of() {
        var numbers = [2, 73, 43, 8, 4];
        for(var k of numbers) {
            console.log(k);
        }
    }

    function boucleFor2InConsole() {
        var numbers = [2, 73, 43, 8, 4];
        var output = [];
        for(var k in numbers) {
            output.push({id: k, k: k});
        }
        return output;
    }

    function boucleFor2OfConsole() {
        var numbers = [2, 73, 43, 8, 4];
        var output = [];
        for(var k of numbers) {
            output.push({id: k, k: k});
        }
        return output;
    }

    return (
        <>
            <p className="Title1">a) Les boucles</p>
            <p>
                Il existe deux types de boucles :
                {"\n"}    - les boucles for
                {"\n"}    - les boucles do...while.
            </p>
            <p className="Title1">a-1) Les boucles for </p>
            <p>La première manière :</p>
            <Container className="CodeContainer">
                <div className="Code">{boucleFor1.toString()}</div>
            </Container>
            <p>
                On indique que l'on va boucler sur la variable k, initialisée à 0.
                {"\n"}Tant que k est inférieur à 2, on continue.
                {"\n"}À chaque reprise, on ajoute 1 à k.
                {"\n"}{"\n"}
                La fonction console.log(k) permet d'afficher dans la console la variable k.
                {"\n"}Affichage console :
            </p>
            <p className="Underline">Affichage console :</p>
            <Container className="CodeContainer">
                <div className="Code">
                    {
                        boucleFor1Console().map(output => (
                            <div key={output.id}>
                                {output.k}
                            </div>
                        ))
                    }
                </div>
            </Container>
            <p>La seconde manière : </p>
            <Container className="CodeContainer">
                <div className="Code">{boucleFor2In.toString()}</div>
            </Container>
            <p>
                On crée une liste, et l'on va boucler dessus.
                {"\n"}
                Pour ce premier cas, k va nous renvoyer l'index de sa position dans la liste 
                (sachant qu'une liste commence par 0 et non par 1).
            </p>
            <p className="Underline">Affichage console :</p>
            <Container className="CodeContainer">
                <div className="Code">
                    {
                        boucleFor2In().map(output => (
                            <div key={output.id}>
                                {output.k}
                            </div>
                        ))
                    }
                </div>
            </Container>
            <Container className="CodeContainer">
                <div className="Code">{boucleFor2Of.toString()}</div>
            </Container>
            <p>
                Dans ce seconde cas, k va nous renvoyer la valeur de l'élément. 
            </p>
            <p className="Underline">Affichage console :</p>
            <Container className="CodeContainer">
                <div className="Code">
                    {
                        boucleFor2Of().map(output => (
                            <div key={output.id}>
                                {output.k}
                            </div>
                        ))
                    }
                </div>
            </Container>
        </>
    )

}

export default LesBoucles;