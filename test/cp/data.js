const quizzes = {
  phy101: {
    title: "Physics Test",
    questions: [
      {
        id: 1,
        type: "text",
        difficulty: "medium",
        question: "Which of the following statements is true for conservative forces?",
        options: [
          { text: "Work depends on path" },
          { text: "Always zero" },
          { text: "Work is path-independent" },
          { text: "Work is non-recoverable" }
        ],
        correct: 2,
        solution: "Conservative forces do work independent of the path."
      },
      {
        id: 2,
        type: "image",
        question: "Identify the motion type from the graph below:",
        questionImage: "img/phy_q1.png",
        options: [
          { image: "img/phy_a1.png" },
          { image: "img/phy_a2.png" },
          { image: "img/phy_a3.png" },
          { image: "img/phy_a4.png" }
        ],
        correct: 0,
        solutionImage: "img/phy_solution1.png"
      },
      {
        id: 3,
        type: "text",
        question: "Gravitational field lines point:",
        options: [
          { text: "Outward from mass" },
          { text: "Toward mass" },
          { text: "Randomly" },
          { text: "Only upward" }
        ],
        correct: 1,
        solution: "Gravitational lines point toward mass."
      },
      {
        id: 4,
        type: "text+image",
        question: "Which diagram correctly shows electric field between two charges?",
        options: [
          { text: "A", image: "img/field1.png" },
          { text: "B", image: "img/field2.png" },
          { text: "C", image: "img/field3.png" },
          { text: "D", image: "img/field4.png" }
        ],
        correct: 0,
        solution: "Field lines go from +ve to -ve charges."
      }
    ]
  },

  chem101: {
    title: "Chemistry Test",
    questions: [
      {
        id: 1,
        type: "text",
        question: "Which of the following is an alkali metal?",
        options: [
          { text: "Calcium" },
          { text: "Potassium" },
          { text: "Iron" },
          { text: "Zinc" }
        ],
        correct: 1,
        solution: "Potassium is an alkali metal in Group 1."
      },
      {
        id: 2,
        type: "image",
        question: "Identify this molecular structure:",
        questionImage: "img/chem_q1.png",
        options: [
          { text: "Water", image: "img/chem_a1.png" },
          { text: "Ammonia", image: "img/chem_a2.png" },
          { text: "Methane", image: "img/chem_a3.png" },
          { text: "Carbon Dioxide", image: "img/chem_a4.png" }
        ],
        correct: 2,
        solutionImage: "img/chem_solution1.png"
      },
      {
        id: 3,
        type: "text",
        question: "Which pH value represents a strong acid?",
        options: [
          { text: "1" },
          { text: "7" },
          { text: "9" },
          { text: "14" }
        ],
        correct: 0,
        solution: "Strong acids have low pH (closer to 0)."
      },
      {
        id: 4,
        type: "text+image",
        question: "Which reaction is exothermic?",
        options: [
          { text: "A", image: "img/reaction1.png" },
          { text: "B", image: "img/reaction2.png" },
          { text: "C", image: "img/reaction3.png" },
          { text: "D", image: "img/reaction4.png" }
        ],
        correct: 1,
        solution: "Exothermic reactions release energy, often shown with downward energy curves."
      }
    ]
  }
};
