import useSwr from "swr";

import fetcher from "../../utils/swrFetcher";
import {
  Query,
  PostQuery,
  PostQueryVariables,
  CreateCommentMutationVariables,
} from "../../types/graphql.generated";

export function usePost(variables: PostQueryVariables) {
  const { bare: bareFetcher } = fetcher;
  const { data, error, isLoading, isValidating, mutate } = useSwr<PostQuery>(
    {
      query: `query Post($id: ID!) {
        post(id: $id) {
          id
          title
          body
        }
      }`,
      variables,
    },
    bareFetcher
  );

  return {
    data,
    error,
    isLoading,
    isValidating,
    mutate,
  };
}
