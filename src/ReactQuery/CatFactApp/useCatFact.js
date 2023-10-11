import { useQuery } from "@tanstack/react-query";

export function useCatFact() {
  const {
    data: catFact,
    isLoading,
    error,
    refetch
  } = useQuery([
    "catFact"],
    () => {
      return fetch("https://catfact.ninja/fact").then((res) => res.json());
    }
  );

  const refresh = () => {
    refetch();
  };

  return { catFact, isLoading, error, refresh };
}
