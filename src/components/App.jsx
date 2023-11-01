import { useState } from "react";
import { Feedback } from "./Feedback/Feedback";
import { Statistics } from "./Statistics/Statistics";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [names, setNames] = useState([
    { id: 'id-1', name: 'good', title: 'Good' },
    { id: 'id-2', name: 'neutral', title: 'Neutral' },
    { id: 'id-3', name: 'bad', title: 'Bad' },
  ])

  const addFeedback = newFeedback => {
    switch (newFeedback) {
      case "good":
        setGood(prevState => prevState + 1)
        break;
      case "neutral":
        setNeutral(prevState => prevState + 1)
        break;
      case "bad":
        setBad(prevState => prevState + 1)
        break;
      default:
        console.log("default");
    }
  };

  return (
    <div>
      <Feedback onAddFeedback={addFeedback} names={names}></Feedback>
      <Statistics good={good} neutral={neutral} bad={bad} message={"There is no feedback"}></Statistics>
    </div>
  );
}
