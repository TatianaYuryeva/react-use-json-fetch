import useJsonFetch from "../hooks/useJsonFetch";

export default function GetError() {
  const [data, isLoading, error] = useJsonFetch('http://localhost:7070/error', []);

  return (
    <>
      <div className="widget">
        <p>get error</p>
        <div className="status">
        {isLoading && <p>Loading...</p>}
        {!isLoading && data.status}
        {error && error.toString()}
        </div>
      </div>
    </>
  )
}
