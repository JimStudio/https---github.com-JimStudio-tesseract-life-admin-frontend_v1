import Head from 'next/head'

export default function Login() {
  return (
    <div className='container'>
      <Head>
         <title>Work Flow</title>
         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" 
         integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>
       </Head>
        <img
             className="rounded mx-auto d-block w-30 p-3 mt-5"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
               alt="Workflow"/>
                <h2 className="mb-5 text-center font-extrabold text-gray-900">Sign in to your account</h2>
    
                <form className='form-inline w-50 mx-auto'>
                  <div className="form-group align-items-center">
                    <input id="email-address" name="email" type="email" placeholder="Email address"  className="form-control " 
                      aria-label="Large"></input>
                      </div>
                          <div className="form-group">
                             <input id="password" name="password" type="password" placeholder="Password"  className="form-control col-sm-10" 
                               aria-label="Large"></input>
         </div>

         <div className="d-flex justify-content-between align-items-center">
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label">
              Check me out
              </label>
            </div>
            <a href="#!" >Forgot your password?</a>
          </div>
              <button type="submit" class="btn btn-primary btn-lg btn-block w-100 mt-3">Sign in</button>
              
        </form>
        
        </div>
       )
}
