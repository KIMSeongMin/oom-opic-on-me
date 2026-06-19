import type { PracticeQuestion } from "../types";

export const practiceQuestions: PracticeQuestion[] = [
  { id: "q1", group: "야외 / 여행", scriptId: "outdoor-travel", type: "장소 묘사", prompt: "Tell me about a park or beach you enjoy visiting. What does it look like, and what do you do there?" },
  { id: "q2", group: "야외 / 여행", scriptId: "outdoor-travel", type: "최근 경험", prompt: "Describe a memorable trip you took with family or friends. What made it special?" },
  { id: "q3", group: "야외 / 여행", scriptId: "outdoor-travel", type: "루틴", prompt: "What outdoor activity do you usually do when the weather is nice?" },
  { id: "q4", group: "실내 / 휴식", scriptId: "indoor-rest", type: "좋아하는 장소", prompt: "Tell me about a cafe you like to visit. Why do you enjoy spending time there?" },
  { id: "q5", group: "실내 / 휴식", scriptId: "indoor-rest", type: "일상 루틴", prompt: "What do you usually do at home when you need to relax?" },
  { id: "q6", group: "실내 / 휴식", scriptId: "indoor-rest", type: "최근 경험", prompt: "Describe a recent time when music helped you change your mood." },
  { id: "q7", group: "운동 / 취미", scriptId: "sports-hobby", type: "취미 묘사", prompt: "Tell me about a sport or hobby you enjoy. How did you get started?" },
  { id: "q8", group: "운동 / 취미", scriptId: "sports-hobby", type: "쇼핑 경험", prompt: "Describe something you bought for your hobby. Why did you choose it?" },
  { id: "q9", group: "운동 / 취미", scriptId: "sports-hobby", type: "변화", prompt: "How have your skills changed since you first started this activity?" },
  { id: "q10", group: "집 / 거주지", scriptId: "home-residence", type: "집 묘사", prompt: "Describe the place where you live. Which part of your home do you like most?" },
  { id: "q11", group: "집 / 거주지", scriptId: "home-residence", type: "동네", prompt: "Tell me about your neighborhood and what you usually do there." },
  { id: "q12", group: "집 / 거주지", scriptId: "home-residence", type: "집안일", prompt: "Tell me about household chores in your home. Share a recent experience." },
];

export const fallbackRoleplayQuestions = [
  "You are at a hotel and your room is different from what you booked. Explain the problem and ask for help.",
  "Call an airline to change your travel date because of a family schedule. Ask about your options.",
  "Call a sports center because rain affected your tennis court reservation. Find another solution.",
  "Call a cleaning company to move an appointment that conflicts with a family event.",
  "You ordered coffee at a cafe, but the drink is different from what you asked for. Explain politely and request a solution.",
];
