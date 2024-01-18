import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigation = useNavigate();
  const mutate = useMutation({
    mutationFn: (data) =>
      axios.post("https://topdragon.co.kr/todo/user/sign-up", data),
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    await mutate.mutateAsync({
      email,
      pw: password,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <input name="email" />
      <input name="password" />
      <button>회원가입</button>
      <button type="button" onClick={() => navigation("/todo")}>
        Todo
      </button>
    </form>
  );
};
export default SignUp;
