import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import './App.css'
export function App() {
  const [questions, setQuestions] = useState([
    {
      category: "Entertainment%3A%20Video%20Games",
      type: "multiple",
      difficulty: "hard",
      question:
        "What%20was%20the%20name%20of%20the%20hero%20in%20the%2080s%20animated%20video%20game%20%27Dragon%27s%20Lair%27%3F",
      correct_answer: "Dirk%20the%20Daring",
      incorrect_answers: [
        "Arthur",
        "Sir%20Toby%20Belch",
        "Guy%20of%20Gisbourne",
      ],
    },
    {
      category: "Animals",
      type: "multiple",
      difficulty: "easy",
      question:
        "What%20is%20the%20scientific%20name%20for%20modern%20day%20humans%3F",
      correct_answer: "Homo%20Sapiens",
      incorrect_answers: [
        "Homo%20Ergaster",
        "Homo%20Erectus",
        "Homo%20Neanderthalensis",
      ],
    },
    {
      category: "Entertainment%3A%20Books",
      type: "multiple",
      difficulty: "hard",
      question: "What%20is%20Ron%20Weasley%27s%20middle%20name%3F",
      correct_answer: "Bilius",
      incorrect_answers: ["Arthur", "John", "Dominic"],
    },
    {
      category: "Entertainment%3A%20Comics",
      type: "multiple",
      difficulty: "easy",
      question:
        "Who%20is%20the%20creator%20of%20the%20comic%20series%20%22The%20Walking%20Dead%22%3F",
      correct_answer: "Robert%20Kirkman",
      incorrect_answers: [
        "Stan%20Lee",
        "Malcolm%20Wheeler-Nicholson",
        "Robert%20Crumb",
      ],
    },
   
    {
      category: "Geography",
      type: "multiple",
      difficulty: "easy",
      question: "What%20is%20the%20capital%20of%20Jamaica%3F",
      correct_answer: "Kingston",
      incorrect_answers: ["Rio%20de%20Janeiro", "Dar%20es%20Salaam", "Kano"],
    },
    {
      category: "History",
      type: "multiple",
      difficulty: "medium",
      question:
        "When%20did%20Jamaica%20recieve%20its%20independence%20from%20England%3F%20",
      correct_answer: "1962",
      incorrect_answers: ["1492", "1963", "1987"],
    },
    {
      category: "General%20Knowledge",
      type: "multiple",
      difficulty: "medium",
      question:
        "In%202013%20how%20much%20money%20was%20lost%20by%20Nigerian%20scams%3F",
      correct_answer: "%2412.7%20Billion",
      incorrect_answers: [
        "%2495%20Million",
        "%24956%20Million",
        "%242.7%20Billion",
      ],
    },
    {
      category: "Entertainment%3A%20Video%20Games",
      type: "multiple",
      difficulty: "hard",
      question:
        "In%20World%20of%20Warcraft%20lore%2C%20who%20organized%20the%20creation%20of%20the%20Paladins%3F",
      correct_answer: "Alonsus%20Faol",
      incorrect_answers: [
        "Uther%20the%20Lightbringer",
        "Alexandros%20Mograine",
        "Sargeras%2C%20The%20Daemon%20Lord",
      ],
    },

    {
      category: "Entertainment%3A%20Japanese%20Anime%20%26%20Manga",
      type: "multiple",
      difficulty: "medium",
      question:
        "What%20is%20the%20name%20of%20the%20device%20that%20allows%20for%20infinite%20energy%20in%20the%20anime%20%22Dimension%20W%22%3F",
      correct_answer: "Coils",
      incorrect_answers: ["Wires", "Collectors", "Tesla"],
    },
    {
      category: "Entertainment%3A%20Video%20Games",
      type: "multiple",
      difficulty: "medium",
      question:
        "What%20is%20the%20name%20of%20Cream%20the%20Rabbit%27s%20mom%20in%20the%20%22Sonic%20the%20Hedgehog%22%20series%3F",
      correct_answer: "Vanilla",
      incorrect_answers: ["Peach", "Strawberry", "Mint"],
    },
    {
      category: "History",
      type: "multiple",
      difficulty: "easy",
      question:
        "These%20two%20countries%20held%20a%20commonwealth%20from%20the%2016th%20to%2018th%20century.",
      correct_answer: "Poland%20and%20Lithuania",
      incorrect_answers: [
        "Hutu%20and%20Rwanda",
        "North%20Korea%20and%20South%20Korea",
        "Bangladesh%20and%20Bhutan",
      ],
    },
   
    {
      category: "Entertainment%3A%20Music",
      type: "multiple",
      difficulty: "medium",
      question:
        "From%20which%20album%20is%20the%20Gorillaz%20song%2C%20%22On%20Melancholy%20Hill%22%20featured%20in%3F",
      correct_answer: "Plastic%20Beach",
      incorrect_answers: ["Demon%20Days", "Humanz", "The%20Fall"],
    },
   
    {
      category: "History",
      type: "multiple",
      difficulty: "hard",
      question:
        "What%20was%20the%20last%20colony%20the%20UK%20ceded%20marking%20the%20end%20of%20the%20British%20Empire%3F",
      correct_answer: "Hong%20Kong",
      incorrect_answers: ["India", "Australia", "Ireland"],
    },
  ]);
  const [count, setCount] = useState(0);

  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
   
  const handleAnswerOptionClick = (isCorrect: any) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = count + 1;
    if (nextQuestion < questions.length) {
      setCount(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const colorDif = (dif : any) => {
   if (dif == "easy"){
    return <span style={{color: '#00ccff'}}>Fácil</span>
   } else if (dif == "medium"){
    return <span style={{color: '#ff9900'}}>Médio</span>
   } else if (dif == "hard"){
    return <span style={{color: '#cc3300'}}>Dificil</span>

   }
  }
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
            Você acertou {score} de {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Questão {count + 1}</span>/{questions.length}
            </div>
            <div className="question-dif">
              <span>Dificuldade: {colorDif(questions[count].difficulty)}</span>
            </div>
            <div className="question-type">
              <span>Categoria: {questions[count].category}</span>
            </div>

            <div className="question-text">
              {questions[count].question}?
            </div>
          </div>
          <div className="answer-section">
            {questions[count].incorrect_answers.map(
              (answerOption) => (
                <button onClick={() => handleAnswerOptionClick(false)}>
                  {answerOption}
                </button>
              )
            )}
            <button onClick={() => handleAnswerOptionClick(true)}>
              {questions[count].correct_answer}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
