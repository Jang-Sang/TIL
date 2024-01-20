// import React from "react";
// import {
//   TodoDataBase,
//   TodoEnum,
//   DailyTodo,
//   WeeklyTodo,
//   MonthlyTodo,
// } from "../../types/todo";

// const isDailyTodo = (todo: TodoDataBase): todo is DailyTodo => {
//   return todo.type === TodoEnum.DAILY;
// };

// const isWeeklyTodo = (todo: TodoDataBase): todo is WeeklyTodo => {
//   return todo.type === TodoEnum.WEEKLY;
// };

// const isMonthlyTodo = (todo: TodoDataBase): todo is MonthlyTodo => {
//   return todo.type === TodoEnum.MONTHLY;
// };

// type Props = {
//   todo: TodoDataBase;
// };

// const OneTodo: React.FC<Props> = ({ todo }) => {
//   if (isDailyTodo(todo)) {
//     // DailyTodo 처리
//     return (
//       <div>
//         <h2>Daily Todo</h2>
//         <p>Title: {todo.title}</p>
//         <p>Content: {todo.content}</p>
//       </div>
//     );
//   } else if (isWeeklyTodo(todo)) {
//     // WeeklyTodo 처리
//     return (
//       <div>
//         <h2>Weekly Todo</h2>
//         <p>Total: {todo.total}</p>
//       </div>
//     );
//   } else if (isMonthlyTodo(todo)) {
//     // MonthlyTodo 처리
//     return (
//       <div>
//         <h2>Monthly Todo</h2>
//         <p>Goal: {todo.goal}</p>
//       </div>
//     );
//   } else {
//     // 알 수 없는 Todo 타입 처리
//     return <div>Unknown Todo Type</div>;
//   }
// };

// export default OneTodo;
