import { useNavigate } from "react-router-dom";
import { useGetTodo } from "./hooks/quries/get-todo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Suspense, useEffect } from "react";
import OneTodo from "./components/one-todo";

const Todo = () => {
  const navigation = useNavigate();
  const qureyClient = useQueryClient();
  // const { data } = useGetTodo();
  const { mutateAsync } = useMutation({
    mutationFn: (data) =>
      axios.post("https://topdragon.co.kr/todo", data, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }),
    // 낙관적(긍정적)이다 업데이트
    // 99.99%
    // onMutate - 데이터의 성공과 실패에 상관없이 일단 데이터가 보내졌을 때의 행동을 지정해준다.
    // typescript에서 suspense 옵션을 걸지 않는 이상 데이터에 !를 붙여서는 안된다. -!는 무조건 성공했다는 조건하에 사용
    // react-query에서는 언젠가는 !를 사용할 순간이 올텐데 그 때는 확실하다는 증거를 위해서 useSuspense를 써줘서 증거를 준다.
    onMutate: (data) => {
      console.log("mutate");
      qureyClient.setQueryData(["todo", null], (oldData) => [
        ...oldData.data,
        data,
      ]);
    },
    // 성공
    onSuccess: (data) => {
      console.log("success");
      qureyClient.setQueryData(["todo", null], (oldData) => {
        oldData.pop();
        oldData.push(data.data);
        return oldData;
      });
    },
    // 취소
    onError: () => {
      console.log("error");
      qureyClient.setQueryData(["todo", null], (oldData) => {
        oldData.pop();
        return oldData;
      });
    },
  });

  //   useEffect(() => {
  //     toast.message(error.response.message)
  //   },[error])

  // onSuccess가 필요없다
  // v5부터는 onSuccess와 onError가 사라졌다
  //   const tempData = data.filter(() => {});

  // console.log(data);
  // 불필요한 요청을 할 필요가 없어요
  // 이 데이터는 나만 보는 값이고, 나의 행동에 따라 데이터가 달라지기 떄문입니

  return (
    <div>
      <button type="button" onClick={() => navigation("/")}>
        SignUp
      </button>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await mutateAsync({
            title: "test",
            content: "test",
          });
          //   qureyClient.invalidateQueries(["todo", null]);
        }}
      >
        <button>등록</button>
      </form>
      <Suspense fallback={<div>Loading...</div>}>
        <OneTodo />
      </Suspense>
    </div>
  );
};
export default Todo;
