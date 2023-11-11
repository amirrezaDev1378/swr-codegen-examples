"use client";
import { CreateCommentInput } from "@/src/generated/swr/graphql.generated";
import React, { FC, useState } from "react";

interface IProps {
  onSubmit: (data: CreateCommentInput) => void;
}

export const AddComment: FC<IProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ name, email, body });
    onSubmit({ name, email, body });
  };

  return (
    <form onSubmit={handleSubmit} style={style}>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
      </div>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>
      <div>
        <input
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body"
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

const style = {
  border: "1px solid black",
  boxShadow: "5px 5px 5px grey",
  padding: "10px",
  margin: "10px",
  cursor: "pointer",
  display:"flex",
  justifyContent:"space-around",
  alignItems:"baseline"
};
