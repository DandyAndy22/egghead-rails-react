import {
  useQuery,
  gql
} from "@apollo/client";
import client from "components/apollo_client"

const QUERY = gql`
users {
  id
  followers {
    id
  }
}
`

export default Example() {

const { loading, error, data } = useQuery(QUERY, {  client: client })

return h`
<div>
  <p>You clicked ${count} times</p>
  <button onClick=${() => setCount(count + 1)}>
    Click me
  </button>
</div>
`;
}