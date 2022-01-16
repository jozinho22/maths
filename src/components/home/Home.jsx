import React from 'react';
import { Container } from 'react-bootstrap';

/* import { MathJax, Provider, Node } from 'react-mathjax';
 *//* import { Expression, Fraction, toTex, Formula } from 'algebra.js';
 */
import '../general-content/Basic.css';

const Home = () => {

/*     const inlineFormula = `k_{n+1} = n^2 + k_n^2 - k_{n-1}`;
    const blockFormula = `\\int_0^\\infty x^2 dx`;  */

    return (
        <Container className="RelativeContainer">
            
            <div className="ChocoTitle">
                <h1>Contact</h1>
            </div>
            
            </Container>
            /* <div style={{padding: 50}}>
                <Provider>
                <div>
                    <p>Inline formula: <Node inline formula={inlineFormula} /></p>
                    <hr></hr>
                    <p>Block formula:</p>
                    <Node formula={blockFormula} />
                </div>
                </Provider>

                <MathJax.Provider>
                <div>
                    This is an inline math formula:{' '}
                    <MathJax.Node inline formula={'a = b'} />
                    And a block one:
                    <MathJax.Node formula={tex} />
                </div>
            </MathJax.Provider>

            </div> */
            );

    }

export default Home;