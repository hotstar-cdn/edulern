// data.js
const quizData = {
  chem101: {
    title: "Chemistry Basics",
    subject: "Chemistry",
    questions: [
      {
        id: "c1q1",
        difficulty: "Medium",
        question_text: "Which of the following pairs are chain isomers?",
        question_image: null,
        options: [
          { id: "A", text: null, image: "images/chem_q1_optA.png" },
          { id: "B", text: null, image: "images/chem_q1_optB.png" },
          { id: "C", text: null, image: "images/chem_q1_optC.png" },
          { id: "D", text: null, image: "images/chem_q1_optD.png" },
        ],
        correct_answer: "C",
        solution_text: "Chain isomers are compounds with the same molecular formula but different arrangements of the carbon skeleton. In option C, both compounds have the formula C5H12O but different carbon chains (a straight chain of 5 vs. a branched chain of 4).",
        solution_image: null,
      },
      {
        id: "c1q2",
        difficulty: "Easy",
        question_text: "What is the chemical symbol for Gold?",
        question_image: null,
        options: [
          { id: "A", text: "Ag", image: null },
          { id: "B", text: "Go", image: null },
          { id: "C", text: "Au", image: null },
          { id: "D", text: "Gd", image: null },
        ],
        correct_answer: "C",
        solution_text: "The chemical symbol for Gold is Au, derived from its Latin name, 'aurum'.",
        solution_image: null,
      },
    ],
  },
  phy101: {
    title: "Thermal Expansion",
    subject: "Physics",
    questions: [
      {
        id: "p1q1",
        difficulty: "Medium",
        question_text: "A 1-litre glass flask is full of mercury at 0°C. How much mercury will spill out if heated to 100°C? (γ_mercury = 1.82x10⁻⁴/°C, α_glass = 0.1x10⁻⁴/°C)",
        question_image: null,
        options: [
          { id: "A", text: "21.2 cc", image: null },
          { id: "B", text: "15.2 cc", image: null },
          { id: "C", text: "1.52 cc", image: null },
          { id: "D", text: "2.12 cc", image: null },
        ],
        correct_answer: "B",
        solution_text: "The change in volume relative to the container is ΔV = V(γ_L - γ_S)Δθ. The coefficient of volume expansion for glass γ_S = 3α_g = 0.3x10⁻⁴/°C. So, ΔV = 1000cc * (1.82x10⁻⁴ - 0.3x10⁻⁴) * 100 = 15.2 cc.",
        solution_image: null,
      },
    ],
  },
};
