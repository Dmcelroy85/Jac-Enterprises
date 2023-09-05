import profileData from '../profile.json'

type Profile = {
  id: number,
  photo: string,
  alt: string,
  name: string,
  profilelink: string,
  hobbies: string
}
export function About() {
  return (
      <div className="container">
        {profileData.map((profile: Profile) =>
          <div className="card w-25" key={profile.id}>
            <img src={profile.photo} alt={profile.alt} />
            <div className="details">
              <h4>{profile.name}</h4>
              <h5>{profile.profilelink}</h5>
              <h6>{profile.hobbies}</h6>
        </div>
        </div>
        )}
      </div>
  )
}