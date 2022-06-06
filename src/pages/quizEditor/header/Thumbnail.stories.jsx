import React from "react";
import Thumbnail from "./Thumbnail";

export default {
  title: "QuizEditor/Header/Thumbnail",
  component: Thumbnail,
  argTypes: {
    url: {
      defaultValue:
        "https://media.istockphoto.com/vectors/quiz-neon-text-banner-on-brick-wall-questions-team-game-quiz-night-vector-id1223692043?k=20&m=1223692043&s=170667a&w=0&h=MXrR6XcdSGCYpzeSGxj7ANNzQfAcbXT-68cEjZ1dVzE=",
    },
  },
};

const Template = (args) => <Thumbnail {...args} />;

export const Default = Template.bind({});
