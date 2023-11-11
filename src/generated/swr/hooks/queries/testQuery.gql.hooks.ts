import useSwr from 'swr'

import fetcher from "../../utils/swrFetcher"
import {
        Query ,
     PostQuery,PostsQuery,PostQueryVariables,CreateCommentMutationVariables,PostsQueryVariables
} from "../../graphql.generated"
	



export function usePost(variables: PostQueryVariables) {



  const { data, error , isLoading, isValidating, mutate } = useSwr<PostQuery>({ query: `query Post($id: ID!) {
  post(id: $id) {
    id
    title
    body
    comments {
      data {
        id
        name
        body
      }
    }
  }
}`, variables}, fetcher);

  return {
    data,
    error,
    isLoading,
    isValidating,
    mutate
  }
}





export function usePosts(variables: PostsQueryVariables) {



  const { data, error , isLoading, isValidating, mutate } = useSwr<PostsQuery>({ query: `query Posts($options: PageQueryOptions) {
  posts(options: $options) {
    data {
      id
      title
      body
      comments {
        data {
          id
          name
          body
        }
      }
    }
  }
}`, variables}, fetcher);

  return {
    data,
    error,
    isLoading,
    isValidating,
    mutate
  }
}




