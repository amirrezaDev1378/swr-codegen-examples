import { Comment } from "@/src/generated/swr/graphql.generated";
import React, { FC } from "react";

interface IProps {
  data?: Comment[];
}
const CommentList: FC<IProps> = ({ data }) => {
    console.log("data",data)
  return (
    <div style={style}>
      <h2>Comment List</h2>
      {data?.map((comment) => (
        <div key={comment.id} style={commentStyle}>
          <h3>{comment.name}</h3>
          <p style={{ color: "#888" }}>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;

const style = {
  border: "1px solid black",
  boxShadow: "5px 5px 5px grey",
  padding: "10px",
  margin: "10px",
  cursor: "pointer",
};
const commentStyle = {
  margin: "16px",
};
