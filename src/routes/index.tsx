import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <iframe
      title="Caminho das Letras"
      src="/landing/index.html"
      className="block h-dvh w-full border-0"
    />
  );
}

