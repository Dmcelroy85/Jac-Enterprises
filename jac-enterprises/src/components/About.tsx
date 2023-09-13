import teamData from '../team.json'
type team = {
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
      <div className="container">
      <div className="row d-flex justify-content-center shadow-lg pb-5">
      <h1 className="my-4 text-info">About The Team</h1>
        {teamData.map((data: team) =>
          <div className="card p-2 m-3 border border-2 border-warning" style={{width:"390px"}} key={data.id}>
            <img src={data.photo} className="card-img-top" alt="photo of employee" title={data.name}/>
            <div className="card-body text-left">
              <h4 className="text-primary">{data.name}</h4>
              <h6 className="text-danger fw-bold">{data.title}</h6>
              <p className="card-text text-dark my-4">{data.bio}</p>
              </div>
              <div className="text-center p-2">
              <a href={data.link} className="btn btn-danger btn-md me-4 text-white fw-bold" target="_blank">portfolio</a>
              <a href={data.link2} className="btn btn-danger btn-md text-white fw-bold px-4" target="_blank">github</a>
              </div>
            </div>
          
        )}
      </div>
      </div>
      </>
  )
}
