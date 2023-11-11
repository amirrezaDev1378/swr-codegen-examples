"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { usePost } from "@/src/generated/swr/hooks/queries/testQuery.gql.hooks";
import { useCreateComment } from "@/src/generated/swr/hooks/mutations/testQuery.gql.hooks";
import { PostsList } from "@/sections";

export default function Home() {
  const { data, isLoading } = usePost({ id: "1" });
  const { trigger } = useCreateComment();
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Posts List</h1>
      <PostsList />
    </div>
  );
}
