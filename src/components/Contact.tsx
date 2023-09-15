import Form from './Form'

function Contact() {
    return (
    <div className="container shadow-lg">
      <div className="d-flex row justify-content-center bg-white shadow-lg pb-5">
      <h1 className="my-4 text-info">Contact Us</h1>
      <div className="d-flex px-5 m-0">
        <div className="bg-danger">
        <section id="section-d" className="grid p-5">
            <div className="text-white">
                <h5 className="text-primary">Address:</h5>
                <p>2645 N High Street Columbus, OH 43202</p>
                <p>1.844.932.2626</p>
                <p>greatadventures@jac.biz</p>
            </div>
            
        </section>
        </div>
<div className="d-flex w-100 text-warning fw-bold fs-5 bg-info">
    
    <Form />

        </div></div></div></div>
    )
}

export default Contact