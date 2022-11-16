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
        if (currentQuestion > 0) {
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
        <div className="text-box-container">
            {showScore ? (
                <div className="alert_result">
                    <div className="middle-box">
                        <div>Tests - Intellectual</div>
                        <div>IQ Test for kids from 7 to 16 years old</div>
                        <div>
                            <button type="submit" onClick={resetQuiz}>⭮ Take the test again</button>
                        </div>
                    </div>
                    <div className="double-partition">
                        <div className="left-child">
                            <div>
                                <h3>Your result:</h3>
                                <p>Test time: 00:00:53, average users 00:09:44.</p>
                                <p><span>Your IQ is 70. </span> This corresponds to a below average level IQ. In this test you have <span>{score} correct answers from {Question_Bank.length}</span>. This is not a very good result for your age 16.</p>
                                <p>Please note that the first four questions of the test were only the practice questions and they do not count towards the final result.</p>
                            </div>
                            <div>
                                <h3>Permanent result link:</h3>
                                <p>https://en.testometrika.com/a/eEsKa0Np%252Fw6033Y4KAGYgQ/ <button>Copy</button></p>
                            </div>
                            <div className="image-grid-container">
                                <h3>Share result:</h3>
                                <div className="image-gerid-section">
                                    <img src="data:image/png;base64,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" alt="" />
                                    <img src="data:image/png;base64,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" />
                                    <img src="data:image/png;base64,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" alt="" />
                                    <img src="data:image/png;base64,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" alt="" />
                                    <img src="data:image/png;base64,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" alt="" />
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNqp4ndex9MSWN4lsYqF2NXRcrw6BwvEeBug&usqp=CAU" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="right-child">
                            <div>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                            </div>
                            <div>4.3</div>
                            <div>
                                <p className="our-social-networks">Our social networks</p>
                                <div>
                                    <div><span class="fa fa-facebook"></span></div>
                                    <div><span class="fa fa-twitter"></span></div>
                                    <div><span class="fa fa-instagram"></span></div>
                                    <div><span class="fa fa-telegram"></span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            ) : (
                <div className="quiz-container">
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

