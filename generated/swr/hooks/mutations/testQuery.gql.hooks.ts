import useSWRMutation, {MutationFetcher, SWRMutationConfiguration} from "swr/mutation";


import fetcher from "../../utils/swrFetcher"
import {
        Query ,
     CreateMessageMutation,FindUserQueryVariables,CreateMessageMutationVariables
} from "../../types/graphql.generated"
	
export function useCreateMessage(handleTrigger:MutationFetcher<CreateMessageMutation, any, CreateMessageMutationVariables> , options?: SWRMutationConfiguration<CreateMessageMutation, any, any, CreateMessageMutationVariables, CreateMessageMutation>) {

    const {data, error, trigger, reset, isMutating} = useSWRMutation<CreateMessageMutation , any , any , CreateMessageMutationVariables, CreateMessageMutation>({query: `mutation CreateMessage($input: MessageInput) {
  createMessage(input: $input) {
    id
  }
}`}, handleTrigger , options);

    return {
        data,
        error,
        trigger,
        reset,
        isMutating
    };
}








