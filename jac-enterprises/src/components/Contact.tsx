
function Contact() {
    return (
        <div className="container bg-white">
        <div className="row d-flex justify-content-center shadow-lg pb-5">
        <h1 className="my-4 text-info">Contact Us</h1>

        <section id="section-d" className="grid p-5">
            <div className="box">
                <p>2645 N High Street Columbus, OH 43202</p>
                <p>1.844.932.2626</p>
                <p>greatadventures@jac.biz</p>
            </div>
            <div className="box">
                <h2 className="content-title">About Our Company</h2>
                <p>Founded in 2019 by a group of wild and crazy individuals for a tremendous love for the great outdoors and the many adventures the Earth has to offer.  These fab people chose to start guiding friends, family, and co-workers on the many adventures that they had experienced over their many years.  And due to the number of requests for guiding, <strong>Jac</strong> was born.</p>
            </div>
        </section>

    <footer id="main-footer" className="grid">
        <div>Jac Enterprises</div>
        <div>Web Site Created By <a href="http://wecancodeit.org" target="_blank">We Can Code IT</a></div>
    </footer>
        </div>
        </div>
    )
}

export default Contact