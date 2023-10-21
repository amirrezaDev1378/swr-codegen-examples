"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { usePost } from "../generated/swr/hooks/queries/testQuery.gql.hooks";
import {
  useCreateComment,
  useCreateUserMutation,
} from "../generated/swr/hooks/mutations/testQuery.gql.hooks";
export default function Home() {
  const { data, isLoading, error, mutate } = usePost({ id: "2" });

  const { data: mutationData, isMutating, trigger } = useCreateComment();

  const { trigger: mutation, reset } = useCreateUserMutation();
  if (isLoading) {
    <h1>loading...</h1>;
  }
  return (
    <main style={{ padding: 40 }}>
      <h1>Query fetched Successfully !</h1>
      <button
        type="button"
        onClick={() => {
          mutate();
        }}
      >
        Refetch Query
      </button>
      <hr />
      <h1>call mutation</h1>
      <button
        type="button"
        onClick={() => {
          mutation(
            {
              input: {
                body: "harchi",
                email: "test@test.com",
                name: "myTestName",
              },
            },
            {
              onError: (err) => {
                console.log("erroe", err);
              },
              onSuccess: (data) => {console.log("data", data)}
            }
          );
        }}
      >
        mutate
      </button>
    </main>
  );
}
