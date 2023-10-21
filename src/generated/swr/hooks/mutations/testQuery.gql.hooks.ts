import useSWRMutation, {
  MutationFetcher,
  SWRMutationConfiguration,
} from "swr/mutation";

import fetcher from "../../utils/swrFetcher";
import {
  Query,
  CreateCommentMutation,
  PostQueryVariables,
  CreateCommentMutationVariables,
} from "../../types/graphql.generated";  
import {
  CreateMessageMutation,
  CreateMessageMutationVariables,
} from "../../../../../generated/swr/types/graphql.generated";

export function useCreateComment(
  handleTrigger?: MutationFetcher<
    CreateCommentMutation,
    any,
    CreateCommentMutationVariables
  >
) {
  const { data, error, trigger, reset, isMutating } = useSWRMutation<
    CreateCommentMutation,
    any,
    any,
    CreateCommentMutationVariables,
    CreateCommentMutation
  >(
    {
      query: `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    id
  }
}`,
    },
    handleTrigger as any,
    fetcher as any
  );

  return {
    data,
    error,
    trigger,
    reset,
    isMutating,
  };
}

export const useCreateUserMutation = (
  _?: never,
  variables?: CreateCommentMutationVariables,
  options?: SWRMutationConfiguration<
    CreateMessageMutation,
    any,
    any,
    CreateMessageMutationVariables,
    CreateMessageMutation
  >
) => {
  if (!options) options = {};
  const { trigger, data, error, isMutating, reset } = useSWRMutation<
    CreateCommentMutation,
    any,
    "",
    CreateCommentMutationVariables,
    CreateCommentMutation
  >(
    {
      query: `mutation CreateComment($input: CreateCommentInput!) {
          createComment(input: $input) {
            id
          }
        }`,
      variables,
    } as any,
    fetcher.bare as any,
    { revalidate: false, ...(options as any) }
  );
  return { trigger, data, error, isMutating, reset };
};
