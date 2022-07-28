import { useQuery } from 'react-query'
import { getData } from '../adapters'

export const getQueryConversation = () => {
    return useQuery(["conversation"], async() => getData(), {
        retry: false,
    })
}