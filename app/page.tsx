import Paginator from "./components/Paginator";

export default function Home() {
  return (
    <div>
      <Paginator itemCount={100} pageSize={10} currentPage={10} />
    </div>
  );
}
