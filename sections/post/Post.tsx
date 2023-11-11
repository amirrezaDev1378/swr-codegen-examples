"use client";
import { PostCard } from "@/components";
import { usePost } from "@/src/generated/swr/hooks/queries/testQuery.gql.hooks";
import { useParams } from "next/navigation";
import React from "react";
import CommentList from "../commentList/CommentList";
import { useCreateComment } from "@/src/generated/swr/hooks/mutations/testQuery.gql.hooks";
import { CreateCommentInput } from "@/src/generated/swr/graphql.generated";
import { AddComment } from "../../sections/addComment";

export const PostComponent = () => {
  const { id } = useParams();
  const { data, isLoading, mutate } = usePost({ id: id as string });
  const { trigger, isMutating } = useCreateComment();
  if (isLoading || isMutating) {
    return <div>Loading...</div>;
  }
  const addComment = ({ body, email, name }: CreateCommentInput) => {
    trigger(
      { input: { body: body, email: email, name: name } },
      { onSuccess: () => mutate() }
    );
  };
  return (
    <div>
      <PostCard body={data?.post?.body} title={data?.post?.title} />
      <AddComment onSubmit={addComment} />
      <CommentList data={data?.post?.comments?.data ?? []} />
    </div>
  );
};
