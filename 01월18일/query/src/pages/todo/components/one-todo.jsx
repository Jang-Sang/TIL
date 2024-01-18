import { useGetTodo } from "../hooks/quries/get-todo";

const OneTodo = () => {
  const { data } = useGetTodo();
  // console.log(data!);
  // ! 무조건 있다, 단언, suspense가 안걸려있으면 요청이 실패했을 수도 있죠 -> 없는데이터 -> 앱이 터집니다
  // !를 쓸때는 useSuspense를 써주는게 좋아요!, 타입 세이프티하게 바뀌어질 것
  // ? 있을 수도 있다, 있으면

  return <div></div>;
};
export default OneTodo;
