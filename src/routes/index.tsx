import { createFileRoute, useLocation } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const search = useLocation({ select: (location) => location.searchStr });

  return (
    <iframe
      title="Caminho das Letras"
      src={`/landing/index.html${search}`}
      className="block h-dvh w-full border-0"
    />
  );
}

