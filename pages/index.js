import Head from 'next/head'

export default function Home() {
  return (
    <div>
    <img
      className="mx-auto h-12 w-auto"
      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
      alt="Workflow"
    />
    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
      Sign in to your account
    </h2>
    <div>
    <input id="email-address" name="email" type="email"focus:outline-none 
           placeholder="Email address" value="user@gmail.com"></input>
    </div>
    <div>
    <input id="email-address" name="email" type="email"focus:outline-none 
           placeholder="Email address" value="user@gmail.com"></input>
    </div>
    <div>
       <input id="remember-me" name="remember-me" type="checkbox"></input>
       <label for="remember-me">Remember me</label>
       <a href="#">Forgot your password?</a>
    </div>
  </div>
  )
}
