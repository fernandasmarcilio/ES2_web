import React, { createContext } from 'react';

const TriviaContext = createContext();

export const TriviaProvider = ({ children }) => {
    const list = (callback) => {
        fetch(`${process.env.REACT_APP_API_URL}/jogo/`)
            .catch(err => console.error(err))
            .then(res => res.json())
            .then(json => {
                callback(json);
            });
    };

    const createQuestion = (questionData, callback) => {
        //for resposta
        console.log(questionData);
        // fetch(`${process.env.REACT_APP_API_URL}/jogo/`, {
        //     body: JSON.stringify(questionData),
        //     headers: { "Content-Type": "application/json" },
        //     method: 'POST'
        // }).catch(err => console.error(err))
        //     .then(res => res.json())
        //     .then(json => {
        //         callback(json);
        //     });
    };

    return (
        <TriviaContext.Provider value={{
            list,
            createQuestion,
        }}>
            {children}
        </TriviaContext.Provider>
    );
}

export default TriviaContext;