import teamData from '../team.json'
import Jokes from './Joke'
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
      
      <div className="container shadow-lg">
      <div className="row d-flex justify-content-center bg-white shadow-lg pb-5">
      <h1 className="my-4 text-info">About The Team</h1>
                <p className="px-5">Founded in 2023 by a group of wild and crazy individuals with a tremendous love for the great outdoors and the many adventures the Earth has to offer.  These fab people chose to start guiding friends, family, and co-workers on the many adventures that they had experienced over their many years.  And due to the number of requests for guiding, <strong>Jac</strong> was born.</p>

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
      
  )
}
