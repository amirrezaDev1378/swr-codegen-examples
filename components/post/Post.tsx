import CommentList from "@/sections/commentList/CommentList";
import { Post } from "@/src/generated/swr/graphql.generated";
import React from "react";

type PostCardProps = Post & {
  onClick?: (id: string) => void;
};

export const PostCard: React.FC<PostCardProps> = ({
  title,
  body,
  onClick,
  id,
}) => {
   const style = {
    border: "1px solid black",
    boxShadow: "5px 5px 5px grey",
    padding: "10px",
    margin: "10px",
    cursor: "pointer",
  };

  return (
    <div
      style={style}
      onClick={() => {
        if (onClick) {
          onClick(String(id));
        }
      }}
    >
      <h2>{title}</h2>
      <p style={{ color: "#888" }}>{body}</p>
    </div>
  );
};
