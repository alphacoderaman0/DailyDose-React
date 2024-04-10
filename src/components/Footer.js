import React from 'react';

export default function Footer(props) {
  return (
    <div>

  <footer className={`bg-${props.mode} fixed-bottom text-center`} >
  {/* <!-- Grid container --> */}
  <div className="container p-2 ">
    {/* <!-- Section: Social media --> */}
    <section className="mb-0">
      {/* <!-- Facebook --> */}
    <a className="btn  btn-floating m-1" href="#!" role="button" style={{color: props.mode === 'dark' ? 'white' : 'red'}}>
        <i className="bi bi-facebook"></i> 
    </a>

      {/* <!-- Twitter --> */}
    <a className="btn  btn-floating m-1" href="#!" role="button" style={{color: props.mode === 'dark' ? 'white' : 'red' }} >
        <i className="bi bi-twitter"></i>
    </a>

      {/* <!-- Google --> */}
    <a className="btn  btn-floating m-1" href="#!" role="button" style={{color: props.mode === 'dark' ? 'white' : 'red'}}>
            <i className="bi bi-google"></i>
    </a>

      {/* <!-- Instagram --> */}
    <a className="btn  btn-floating m-1" href="#!" role="button" style={{color: props.mode === 'dark' ? 'white' : 'red'}}>
            <i className="bi bi-instagram"></i>
    </a>

      {/* <!-- Linkedin --> */}
    <a className="btn  btn-floating m-1" href="#!" role="button" style={{color: props.mode === 'dark' ? 'white' : 'red'}}>
            <i className="bi bi-linkedin"></i>
    </a>

      {/* <!-- Github --> */}
    <a className="btn btn-floating m-1" href="#!" role="button" style={{color: props.mode === 'dark' ? 'white' : 'red'}}>
            <i className="bi bi-github"></i>
    </a>
    </section>
    {/* <!-- Section: Social media --> */}
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div className="text-center p-2 fs-5" style={{backgroundColor:'rgba(0, 0, 0, 0.2)',color: props.mode === 'dark' ? 'white' : 'black'}}>
    © {new Date().getFullYear()} Copyright <a href="/" style={{color:'red', textDecoration:'none'}}>DailyDose</a> inc.
  </div>
  {/* <!-- Copyright --> */}
</footer>
  

{/* <!-- End of .container --> */}



    </div>
  )
}
