import { Container } from 'react-bootstrap';

import Code from './Code';

const LesBoucles = () => {

    function boucleFor1() {
        for(var k = 0; k < 2; k++) {
            console.log(k);
        }
    }

    function boucleFor1Console() {
        var output = [];
        for(var k = 0; k < 2; k++) {
            output.push({id: k, value: k});
        }
        return output;
    }

    function boucleFor2In() {
        var numbers = [2, 73, 43, 8, 4];
        for(var k in numbers) {
            console.log(k);
        }
    }

    function boucleFor2InConsole() {
        var numbers = [2, 73, 43, 8, 4];
        var output = [];
        for(var k in numbers) {
            output.push({id: k, value: k});
        }
        return output;
    }

    function boucleFor2Of() {
        var numbers = [2, 73, 43, 8, 4];
        for(var number of numbers) {
            console.log(number);
        }
    }

    function boucleFor2OfConsole() {
        var numbers = [2, 73, 43, 8, 4];
        var output = [];
        var k = 0;
        for(var number of numbers) {
            output.push({id: k++, value: number});
        }
        return output;
    }

    function boucleDoWhile() {
        let j = 0;

        do {
            j = j + 1;
            console.log(j);
        } while (j < 3);
    }

    function boucleDoWhileConsole() {
        let output = [];
        let j = 0;

        do {
            j = j + 1;
            output.push({id: j, value: j});
        } while (j < 3);

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
            <p>
                Il existe trois boucles for :
                {"\n"}    - les boucles for classiques
                {"\n"}    - les boucles for in.
                {"\n"}    - les boucles for of.
            </p>
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
            <Code>
                    {
                        boucleFor1Console().map(output => (
                            <div key={output.id}>
                                {output.value}
                            </div>
                        ))
                    }
            </Code>
            <p>La seconde manière : </p>
            <Code>
                {boucleFor2In.toString()}
            </Code>
            <p>
                On crée une liste, et l'on va boucler dessus.
                {"\n"}
                Pour ce premier cas, k va nous renvoyer l'index de sa position dans la liste 
                (sachant qu'une liste commence par 0 et non par 1).
            </p>
            <p className="Underline">Affichage console :</p>
            <Code>
                    {
                        boucleFor2InConsole().map(output => (
                            <div key={output.id}>
                                {output.value}
                            </div>
                        ))
                    }
            </Code>
            <p>Et la dernière manière :</p>
            <Code>
                {boucleFor2Of.toString()}
            </Code>
            <p>
                Dans ce second cas, k va nous renvoyer la valeur de l'élément. 
            </p>
            <p className="Underline">Affichage console :</p>
            <Code>
                    {
                        boucleFor2OfConsole().map(output => (
                            <div key={output.id}>
                                {output.value}
                            </div>
                        ))
                    }
            </Code>
            <p className="Title1">a-2) Les boucles do...while </p>
            <Code>
                {boucleDoWhile.toString()}
            </Code>
            <p>
                Cette fois-ci, on boucle sur le do tant que la condition est toujours vérifiée.
                {"\n"}En l'occurrence ici, que j est inférieur à 3.
                {"\n"}{"\n"}Notons que pour cet exemple on a utilité le mot-clef let à la place de var.
                {"\n"}Dans le cas d'une fonction, les deux sont équivalents, mais dans le cas global une variable déclarée avec var a une visibilité plus grande.
            </p>
            <p className="Underline">Affichage console :</p>
            <Code>
                    {
                        boucleDoWhileConsole().map(output => (
                            <div key={output.id}>
                                {output.value}
                            </div>
                        ))
                    }
            </Code>
        </>
    )

}

export default LesBoucles;