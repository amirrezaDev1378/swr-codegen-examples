import useSWRMutation, {MutationFetcher, SWRMutationConfiguration} from "swr/mutation";


import fetcher from "../../utils/swrFetcher"
import {
        Query ,
     CreateCommentMutation,PostQueryVariables,CreateCommentMutationVariables
} from "../../types/graphql.generated"
	
export function useCreateComment(variables?: CreateCommentMutationVariables , options?: SWRMutationConfiguration<CreateCommentMutation, any, any, CreateCommentMutationVariables, CreateMessageMutation>) {
    if (!options) options = {};
    const {data, error, trigger, reset, isMutating} = useSWRMutation<CreateCommentMutation , any , any , CreateCommentMutationVariables, CreateCommentMutation>({query: `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    id
  }
}`variables} as any
    , fetcher as any,
    { revalidate: false, ...(options as any) });

    return {
        data,
        error,
        trigger,
        reset,
        isMutating
    };
}




