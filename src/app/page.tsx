"use client";

import {useGetAllTodos} from "@/generated/swr/hooks/queries/testQuery.gql.hooks";
import {useCreateTodo} from "@/generated/swr/hooks/mutations/testQuery.gql.hooks";
import React from "react";

export default function Home() {
    const {data, isLoading: isLoadingTodos} = useGetAllTodos({});


    const {trigger, isMutating} = useCreateTodo();
    const handleCreateTodo = (e: React.FormEvent) => {
        e.preventDefault();
        const inputVal = document.getElementById("todoTitle") as HTMLInputElement;
        if (!inputVal) return;

        const {value} = inputVal;
        if (!value) return alert("please add a title for your todo!!!");

        trigger({
            input: {
                completed: false,
                title: value
            }
        }).then((d) => {

            alert(`Todo created successfully!!! , your todo id is ${d?.createTodo?.id}`);
        }).catch((reason) => {
            alert("An error accord while creating a todo ☹️ ,check your console... ");
            console.error(reason);
        });

    };


    return (
        <main style={{padding: 40}}>

            <h1>
                press <kbd>F12</kbd> to open your console!
            </h1>

            {(!isLoadingTodos && data?.todos?.data) && <h3>Query fetched Successfully !</h3>}
            {isLoadingTodos && "Loading Todos ..."}

            {isMutating && "Mutating Todos ..."}
            <ul>
                {!isLoadingTodos && data?.todos?.data?.map(d => <li key={d?.id}>{d?.title}</li>)}
            </ul>

            <form onSubmit={handleCreateTodo}>
                <input type="text" placeholder={"todo title"} id={"todoTitle"}/>
                <button type={"submit"}>
                    create todo
                </button>
            </form>
        </main>
    );
}
