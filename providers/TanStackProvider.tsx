"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

export default function TanStackProvider({
  children,
}: {
  children: ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>{children}</RecoilRoot>
    </QueryClientProvider>
  );
}
