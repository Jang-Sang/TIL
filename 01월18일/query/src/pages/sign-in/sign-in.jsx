import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  // react-query mutaion은 오직 편의성에 의해서만 사용하고 axios와 다를바 없습니다
  const queryClient = useQueryClient();
  const { isError, isSuccess, isPending, mutate, mutateAsync } = useMutation({
    mutationFn: (data) =>
      axios.post("https://topdragon.co.kr/todo/user/sign-in", data, {
        withCredentials: true,
        //withCredentials 옵션은 단어의 의미에서 알 수 있듯이, 서로 다른 도메인(크로스 도메인)에 요청을 보낼 때 요청에 credential 정보를 담아서 보낼 지를 결정하는 항목입니다.
        // 여기서, credential 정보가 포함되어 있는 요청은 아래 두 가지 경우를 의미합니다.
        // 쿠키를 첨부해서 보내는 요청
        // 헤더에 Authorization 항목이 있는 요청
        // 따라서, 보내고자 하는 요청이 위 두 가지 항목 중 한 가지라도 포함하고 있다면 withCredentials 옵션을 true로 설정해야만 합니다.
        // withCredentials는 쿠키를 전송할지 여부를 결정하는 옵션으로 withCredentials: true 설정은 필수적이다.
        //설정을 사용하면, 요청을 보내는 출처와 다른 출처에 있는 서버 간의 요청에서도 사용자 인증 정보(예: 쿠키, HTTP 인증 헤더)를 포함시킬 수 있습니다.
      }),
    // onSuccess: (data) => {
    //   console.log(data);
    // },
    retryDelay: 1000 * 3,
    // 병목현상해결을 위한 추가
    // 다양한 편의성을 위한 옵션과 값을 제공하기 떄문에 용이하게 사용할 수 있다
  });

  // mutate는 await 사용이 불가능하기 때문에 onSuccess,onError를 사용해야 한다.
  // mutateAsync는 await이 사용이 가능하기 때문에 로직을 동기적으로 처리할 수 있다.

  const onSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const response = await mutateAsync({
      email,
      pw: password,
    });

    // mutateAsync를 사용하지 않고 mutate를 사용할 경우
    // const response = mutate({
    //   email,
    //   pw: password,
    // });

    localStorage.setItem("access_token", response.data.token);
    // 로그인 요청이 성공적으로 처리되고 나면, 서버로부터 반환된 응답중 'token'이라는 데이터를 로컬 스토리지에 저장한다.
    // localStorage는 웹 브라우저에 데이터를 저장할 수 있게 해주는 기능이다.-이러한 데이터는 브라우저 세션 간에 유지된다.
    // "access_token"이라는 키로 토큰을 저장한다. 이 토큰은 사용자가 다른 API 요청을 할 때 인증 용도로 사용된다.
    // 정리 = 사용자의 로그인정보(토큰)을 브라우저에 저장하여, 나중에 사용자가 웹 애플리케이션을 다시 방문했을 때 자동으로 로그인을 유지하는 역할
    navigate("/todo");
  };

  const onClick = () => {
    const res = queryClient.fetchQuery({
      queryKey: ["todo"],
      queryFn: () => {},
    });
    console.log(res);
  };

  return (
    <form onSubmit={onSubmit}>
      <input name="email" />
      <input name="password" />
      <button disabled={isPending}>로그인</button>
      {/*불필요한 요청을 줄이는 것은 반드시 필요한 것 - 의무*/}
      {/* 중간에 여유기간을 두어 반복되는 요청을 막는다. */}
      {/*3초 ))))))) 10초, 20초, 1분, 2분(기다리게할 것인가, 기다리게 하지 않을 것인가 - axios cancel-token, abort ) 이것은 개발자가 정하는 것*/}
      <button onClick={onClick}>휴</button>
    </form>
  );
};
export default SignIn;
