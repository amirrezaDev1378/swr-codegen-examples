import useSwr from 'swr'

import fetcher from "../../utils/swrFetcher"
import {
        Query ,
     FindUserQuery,FindUserQueryVariables,CreateMessageMutationVariables
} from "../../types/graphql.generated"
	



export function useFindUser(variables: FindUserQueryVariables) {
  const {bare: bareFetcher} = fetcher;


  const { data, error , isLoading, isValidating, mutate } = useSwr<FindUserQuery>({ query: `query findUser($userId: ID!) {
  user(id: $userId) {
    ...UserFields
  }
}`, variables}, bareFetcher as any);

  return {
    data,
    error,
    isLoading,
    isValidating,
    mutate
  }
}




