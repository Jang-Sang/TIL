import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import axios from "axios";

const a = undefined;

// 리엑트쿼리는 재사용에 대한 처리 때문에 이러한 커스텀 훅함수가 반 강제화
// 내가 리엑트 쿼리를 쓰는 이유가 캐싱 때문이잖아 -> 전역 상태 관리
export const useGetTodo = (params, config) =>
  useSuspenseQuery({
    queryKey: ["todo", params],
    queryFn: () =>
      axios.get("https://topdragon.co.kr/todo", {
        params,
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }),
    staleTime: Infinity,
    // 가져온 데이터를 정한 시간동안 자동으로 다시 가져오지 않는다.

    ...config,
    // 매개변수를 통해 전달될 수 있는 추가 구성 옵션을 포함하는 데 사용된다.
    refetchOnMount: false,
    // 이 쿼리를 사용하는 컴포넌트가 마운트될 때 쿼리를 다시 가져와야 하는지 여부를 결정합니다.
    // false이므로 다시 가져오지 않는다.
    // enabled: !!a,
    // 특정한 값이 오고나서 실행해라!!
    // query를 요청하는 일이 연달아 발생하는 경우도
    // a(react-query)  -> b(a) (react-query) -> c(b) (react-query)

    // a, b, c, ab , ac 데이터가 한번에 오지 않고 자자잘하게 보내는 경우가 많음
    // 리엑트쿼리를 사용하지 않으면 데이터를 한번에 보내주는 경우가 많음
    // 리엑트쿼리의 데이터 캐싱을 극대화하려면 데이터는 잘게잘게 조작 되어있는게 쓰기 편하겠죠 -> 캐싱이 되니까 (불필요한 요청을 하지 않으니까)
    // react-query는 이런일이 굉장히 잦는데
  });
