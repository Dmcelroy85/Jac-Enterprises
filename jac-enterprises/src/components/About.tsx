import employeeData from '../employees.json'
type employees = {
  id: number,
  title: string,
  photo: string,
  name: string
  bio: string
  link: string
  link2: string
}
export function About() {
  return (
      <>
      <div className="container-fluid">
      <h2>About The JAC Team</h2>
      <div className="d-flex">
        {employeeData.map((data: employees) =>
          <div className="card m-2" key={data.id}>
            <img src={data.photo} className="card-img-top" alt="photo of employee" title={data.name}/>
            <div className="card-body text-center bg-dark bg-gradient text-white">
              <h4 className="text-warning">{data.name}</h4>
              <h6 className="text-danger">{data.title}</h6>
              <p className="card-text text-warning my-4">{data.bio}</p>
              <a href={data.link} className="btn btn-light btn-sm me-4 text-dark" target="_blank">portfolio</a>
              <a href={data.link2} className="btn btn-light btn-sm text-dark" target="_blank">github</a>
            </div>
          </div>
        )}
      </div>
      </div>
      </>
  )
}
