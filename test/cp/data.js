// data.js

const tests = {
  demo: {
    title: "General Knowledge",
    questions: [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "London"],
        correct: 2,
      },
      {
        question: "Which of these is a fruit?",
        options: [
          "images/apple.jpg",
          "images/car.jpg",
          "images/dog.jpg",
          "images/pen.jpg",
        ],
        correct: 0,
        isImageAnswer: true,
      },
      {
        question: "Identify the animal",
        image: "images/lion.jpg",
        options: ["Cat", "Dog", "Lion", "Tiger"],
        correct: 2,
        isImageQuestion: true,
      },
      {
        question: "Pick the correct flag of India",
        options: [
          "images/flag_us.jpg",
          "images/flag_uk.jpg",
          "images/flag_in.jpg",
          "images/flag_cn.jpg",
        ],
        correct: 2,
        isImageAnswer: true,
      },
    ],
  },
};
