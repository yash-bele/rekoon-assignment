import { useGetUserQuery } from "./store/api";

export default function App() {
  const { isLoading, data } = useGetUserQuery();

  return (
    <div className="w-screen h-screen grid place-items-center">
      <div className="flex flex-col items-center space-y-1">
        <h1 className="text-3xl">Welcome!</h1>
        {isLoading ? <p className="h-5">----------</p> : <p className="h-5 text-xl">{data.email}</p>}
      </div>
    </div>
  );
}
