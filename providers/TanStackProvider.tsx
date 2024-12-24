"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactNode } from "react";

export default function TanStackProvider({
  children,
}: {
  children: ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
