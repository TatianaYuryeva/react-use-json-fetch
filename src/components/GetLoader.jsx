import useJsonFetch from "../hooks/useJsonFetch";

export default function GetLoader() {
  const [data, isLoading, error] = useJsonFetch('http://localhost:7070/loading', []);
  
  return (
    <>
      <div className="widget">
        <p>get loading</p>
        <div className="status">
        {isLoading && <p>Loading...</p>}
        {!isLoading && data.status}
        {error && error.toString()}
        </div>
      </div>
    </>
  )
}
