import Paginator from "./components/Paginator";

interface Props {
  searchParams: { page: string };
}

export default function Home({ searchParams }: Props) {
  return (
    <div>
      <Paginator
        itemCount={100}
        pageSize={10}
        currentPage={parseInt(searchParams.page || "1")}
      />
    </div>
  );
}
