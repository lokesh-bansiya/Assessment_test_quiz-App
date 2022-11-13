import "./Assessment_Quiz.css";
import { useState } from "react";
import { Link } from "react-router-dom";
// import {ImCross} from ".react"

const Assessment_Quiz = () => {

    var Question_Bank = [
        {
            image: "https://en.testometrika.com/upload/questions/9a3/9a3e5c664c57fefe9781ed343a0b4224.svg",
            Question: "1. Which shape should be in the rightmost cell with a question mark?",
            button: "Back",
            Answer_Text: [
                {
                    Answer: "https://en.testometrika.com/upload/answers/2ad/2ad96527ff3bdffc254b05985d90e670.svg",
                    isCorrect: false
                },
                {
                    Answer: "https://en.testometrika.com/upload/answers/743/743c194ea591850121774bbcea728cb7.svg",
                    isCorrect: false
                },
                {
                    Answer: "https://en.testometrika.com/upload/answers/3f4/3f48e60b405fe3a20ae80b4c1effe5be.svg",
                    isCorrect: false
                },
                {
                    Answer: "https://en.testometrika.com/upload/answers/af1/af154b81388bbe80d95a6c2d958090d3.svg",
                    isCorrect: true
                },
                {
                    Answer: "https://en.testometrika.com/upload/answers/282/2829b67f1ddb1c64a70b4ac754fc03c9.svg",
                    isCorrect: false
                },
                {
                    Answer: "https://en.testometrika.com/upload/answers/d63/d635d6a11058a01b5b6760b6638342fa.svg",
                    isCorrect: false
                }
            ]
        },
        // second-section 
        {
            image: "https://en.testometrika.com/upload/questions/61f/61f8311dc95818b190b639bb10e7ff0a.svg",
            Question: "2. Which shape should be in the rightmost cell with a question mark?",
            button: "Back",
            Answer_Text: [
                {
                    Answer: "https://en.testometrika.com/upload/answers/9a3/9a3eb223416f61ff5b9177914b70bd60.svg",
                    isCorrect: false
                },
                {
                    Answer: "https://en.testometrika.com/upload/answers/c4d/c4d606c7c886fc53ecee625417464a02.svg",
                    isCorrect: true
                },
                {
                    Answer: "https://en.testometrika.com/upload/answers/b78/b7854d51e6fc99a7051b4eafe549ccdd.svg",
                    isCorrect: false
                },
                {
                    Answer: "https://en.testometrika.com/upload/answers/b9d/b9db4988f489cc0410930f09bb287963.svg",
                    isCorrect: false
                },
                {
                    Answer: "https://en.testometrika.com/upload/answers/174/174cc63476713040f570f0ffabf5d5a4.svg",
                    isCorrect: false
                },
                {
                    Answer: "https://en.testometrika.com/upload/answers/75b/75b18f06da1aeff34f41634dcb126b57.svg",
                    isCorrect: false
                }
            ]
        },
        {
            image: "https://en.testometrika.com/upload/questions/56e/56e7575fce5c66102f68965309041c81.svg",
            Question: "3. Which shape should be in the rightmost cell with a question mark?",
            button: "Back",
            Answer_Text: [
                {
                    Answer: "https://en.testometrika.com/upload/answers/7f1/7f11134a286731f010982d5d79e8cd26.svg",
                    isCorrect: false
                },
                {
                    Answer: "https://en.testometrika.com/upload/answers/e3c/e3c50d49dd3e826c711e33eed9e6b9cb.svg",
                    isCorrect: false
                },
                {
                    Answer: "https://en.testometrika.com/upload/answers/370/370cd583ba4fe1ed516fa59e729ddf69.svg",
                    isCorrect: false
                },
                {
                    Answer: "https://en.testometrika.com/upload/answers/078/078f9d02c28538a24e685aa90ef651e3.svg",
                    isCorrect: false
                },
                {
                    Answer: "https://en.testometrika.com/upload/answers/52e/52e67d35e0f5d7ac65d639f7d74737b1.svg",
                    isCorrect: true
                },
                {
                    Answer: "https://en.testometrika.com/upload/answers/110/1108829aabfbc040dee01c20198f57be.svg",
                    isCorrect: false
                }
            ]
        },
        {
            image: "https://en.testometrika.com/upload/questions/857/85779e2ee0f5a8c6874284c8dc7f040a.svg",
            Question: "4. Which shape should be in the rightmost cell with a question mark?",
            button: "Back",
            Answer_Text: [
                {
                    Answer: "https://en.testometrika.com/upload/answers/833/8333eeab5e38a9e4cb24412453f29f7b.svg",
                    isCorrect: false
                },
                {
                    Answer: "https://en.testometrika.com/upload/answers/292/29281ad823bd13e1f99a39e04685e6ed.svg",
                    isCorrect: false
                },
                {
                    Answer: "https://en.testometrika.com/upload/answers/5ef/5ef20f3121c4d9e38517522535eb298c.svg",
                    isCorrect: false
                },
                {
                    Answer: "https://en.testometrika.com/upload/answers/376/3763c71fffa9648c4aa1f1c53aa06bce.svg",
                    isCorrect: false
                },
                {
                    Answer: "https://en.testometrika.com/upload/answers/fe5/fe52d92ce882e1571d445b0951b2d887.svg",
                    isCorrect: false
                },
                {
                    Answer: "https://en.testometrika.com/upload/answers/81f/81ffd37c5b0c47314c5c35d90cc410f3.svg",
                    isCorrect: true
                }
            ]
        },
        {
            image: "https://en.testometrika.com/upload/questions/86c/86c577fabc67aed0dbd84df222f0685a.svg",
            Question: "5. Which shape should be in the rightmost cell with a question mark?",
            button: "Back",
            Answer_Text: [
                {
                    Answer: "https://en.testometrika.com/upload/answers/2f5/2f5bb5003870c7d81339a60fc9ee0abf.svg",
                    isCorrect: false
                },
                {
                    Answer: "https://en.testometrika.com/upload/answers/405/405fc59bd9ca9b483046be0f5641c585.svg",
                    isCorrect: false
                },
                {
                    Answer: "https://en.testometrika.com/upload/answers/4e2/4e23e2df71d493fccae53c20760642c0.svg",
                    isCorrect: false
                },
                {
                    Answer: "https://en.testometrika.com/upload/answers/7df/7dfcfdb549c39a7d6c3cde429291bd03.svg",
                    isCorrect: true
                },
                {
                    Answer: "https://en.testometrika.com/upload/answers/4f9/4f98b73c7fa56a9753c4f3d68b697fe1.svg",
                    isCorrect: false
                },
                {
                    Answer: "https://en.testometrika.com/upload/answers/468/468e4cededf71527edda5d3253dd5a9b.svg",
                    isCorrect: false
                }
            ]
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    


    const handleAnswersResponse = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < Question_Bank.length) {
            setCurrentQuestion(nextQuestion);
        }
        else {
            setShowScore(true);
        }
    };

    
    const handleBack = () => {
        if(currentQuestion > 0){
            setCurrentQuestion(currentQuestion - 1);
            setScore(score - 1);
            setShowScore(false);
        }
    }
    // console.log(Question_Bank);

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
    }

    return (
        <div>
            {showScore ? (
                <div className="alert_result">
                    <div>IQ Test for kids from 7 to 16 years old</div>
                    <div>You have scored {score} out of {Question_Bank.length}</div>
                    <div>
                        <button type="submit" onClick={resetQuiz}>⭮ Take the test again</button>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="top_section_of_quize">
                        <div><span>{currentQuestion}</span>/{Question_Bank.length}</div>
                        <Link style={{ textDecorationLine: "none" }} to="/">
                            <div>
                                ✖
                            </div>
                        </Link>
                    </div>

                    <div className="Question_Image">
                        <img src={Question_Bank[currentQuestion].image} />
                    </div>

                    <div className="question_section">
                        {Question_Bank[currentQuestion].Question}
                    </div>

                    <div className="Answers_grid">
                        {Question_Bank[currentQuestion].Answer_Text.map((ans) => (
                            <div className="Answers_Item">
                                <img src={ans.Answer} onClick={() => handleAnswersResponse(ans.isCorrect)} alt="" />
                            
                            </div>
                            
                        ))}
                        <button onClick={handleBack}>
                            {/* {Question_Bank[currentQuestion].button} */}
                            🠔
                        </button>

                    </div>

                </div>
                )
            }
        </div>
    )
}

export { Assessment_Quiz };