import { Spinner } from 'react-bootstrap';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { getOpenKeys } from '../pages/api/openaiKeys';

export async function getServerSideProps() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('openKeys', getOpenKeys)
  return {
      props: {
          dehydratedState: dehydrate(queryClient),
      },
  }
}


export default function ListGroup() {
  
  const { data: openKeys, error, isLoading } = useQuery('openKeys', getOpenKeys)

  if (error) {
    return (
        <>
            <p>A ocurrido un error!</p>
        </>
    )
}

if (isLoading) {
  return (
    <><p className="text-center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner>
    </p>
    </>
  )
}

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Cuentas agregadas</h5>


          <div className="list-group">

          {!!openKeys && openKeys.map((item, index) => (
            <a href="#" className="list-group-item list-group-item-action" aria-current="true" key={index}>
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{item.nombre}</h5>
                <small><button type="submit" className="btn btn-danger btn-sm"><i className="bi bi-x-circle"></i></button></small>
              </div>
              <p className="mb-1">API key: {item.bearer_token} </p>
         
            </a>
          ))}
            
          </div>

        </div>
      </div>
    </>
  )
}
