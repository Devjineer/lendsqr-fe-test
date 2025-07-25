import { useEffect, useState } from "react";

const useResource = <T,>(resourceFn: () => Promise<T[]> ) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await resourceFn();
        setData(response);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch data");
        console.log(error);
      }
    })();
  }, [resourceFn]);

  return { data, loading, error };
};

export default useResource;
