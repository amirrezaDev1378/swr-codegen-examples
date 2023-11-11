import { usePosts } from "@/src/generated/swr/hooks/queries/testQuery.gql.hooks";
import { PostCard } from "../../components";
import { useRouter } from "next/navigation";
export const PostsList = () => {
  const { data, isLoading } = usePosts({ options: {} });
  const { push } = useRouter();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const onClick = (id: string) => {
    push(`/post/${id}`);
  };
  return data?.posts?.data?.map((post) => (
    <PostCard
      key={post?.id}
      id={post?.id}
      body={post?.body}
      title={post?.title}
      onClick={onClick}
    />
  ));
};
