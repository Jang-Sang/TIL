import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/sign-up/sign-up";
import Todo from "./pages/todo/todo";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import SignIn from "./pages/sign-in/sign-in";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";

// // 기본 옵션 설정
// defaultOptions: {
//   mutations: {
//     retry: 2,
//   },
//   queries: {
//     retry: 3,
//     staleTime: Infinity,
//   },
// },
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      console.log(error, "error");
      // global error handling
    },
  }),
});

function App() {
  return (
    <Suspense fallback={<Loding />}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider
          router={createBrowserRouter([
            {
              path: "/",
              element: <SignUp />,
            },
            {
              path: "/sign-in",
              element: <SignIn />,
            },
            {
              path: "/todo",
              element: <Todo />,
            },
          ])}
        />
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
