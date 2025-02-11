import { QueryClient, QueryFunction } from "@tanstack/react-query";

// Dummy data for demonstration purposes
const dummyData = {
  message: "This is dummy data",
  data: {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
  },
};

// Unified API Request Function with Dummy Data
export async function apiRequest<T>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  url: string,
  data?: unknown
): Promise<T> {
  console.log(`Request method: ${method}, URL: ${url}, Data: ${JSON.stringify(data)}`);
  // Return dummy data instead of making an actual request
  return dummyData as unknown as T;
}

type UnauthorizedBehavior = "returnNull" | "throw";

export const getQueryFn =
  <T>({ on401 }: { on401: UnauthorizedBehavior }): QueryFunction<T> =>
  async ({ queryKey }) => {
    const url = queryKey[0] as string;
    console.log(`Fetching URL: ${url}`);
    // Return dummy data instead of making an actual request
    return dummyData as unknown as T;
  };

// React Query Client with Default Options
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});