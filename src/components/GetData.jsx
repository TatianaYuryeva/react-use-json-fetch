import useJsonFetch from "../hooks/useJsonFetch";

export default function GetData() {
  const [data, isLoading, error] = useJsonFetch('http://localhost:7070/data', []);
  
  return (
    <>
      <div className="widget">
        <p>get data</p>
        <div className="status">
        {isLoading && <p>Loading...</p>}
        {!isLoading && data.status}
        {error && error.toString()}
        </div>
      </div>
    </>
  )
}
