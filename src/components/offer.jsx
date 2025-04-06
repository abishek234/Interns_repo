const Offers = () => {
  return (
    <section className="bg-white-100 py-10" id="microservices">
      <div className="container mx-auto px-4">
        <h3 className="mb-5 text-center text-2xl font-bold">
          AI SOLUTIONS
        </h3>
        <h1 className="mb-10 text-center text-4xl font-bold">
          WE OFFER
        </h1>
        {/* <div className="flex justify-center mb-10">
          <img className="w-48 h-auto" src="assets/images/shape_dot.png" alt="Shape Dot" />
        </div> */}
        {/* <div className="flex justify-center mb-10">
          <svg className="animate-wave w-64 h-64" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,128C672,139,768,181,864,186.7C960,192,1056,160,1152,149.3C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div> */}
         <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Service Card 1 */}

          <div className="w-full max-w-sm rounded-lg border border-white-200 bg-white p-4 shadow sm:p-8 dark:border-white-700 dark:bg-white-800 bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
            <h5 className="mb-4 text-xl font-medium text-gray-500  dark:text-gray-400">
              Standard plan
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-3xl font-semibold"></span>
              <span className="text-5xl font-extrabold tracking-tight"></span>
              <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
               
              </span>
            </div>
            <ul role="list" className="my-7 space-y-5">
              <li className="flex items-center">
                <svg
                  className="h-4 w-4 flex-shrink-0 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="ms-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  2 team members
                </span>
              </li>
              <li className="flex">
                <svg
                  className="h-4 w-4 flex-shrink-0 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="ms-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  20GB Cloud storage
                </span>
              </li>
              <li className="flex">
                <svg
                  className="h-4 w-4 flex-shrink-0 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="ms-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Integration help
                </span>
              </li>
              <li className="flex">
                <svg
                  className="h-4 w-4 flex-shrink-0 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="ms-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Integration help
                </span>
              </li>
              <li className="flex">
                <svg
                  className="h-4 w-4 flex-shrink-0 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="ms-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Integration help
                </span>
              </li>
              <li className="flex">
                <svg
                  className="h-4 w-4 flex-shrink-0 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="ms-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Integration help
                </span>
              </li>
              <li className="flex">
                <svg
                  className="h-4 w-4 flex-shrink-0 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="ms-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Integration help
                </span>
              </li>
            </ul>
           
          </div>

          {/* Additional service cards go here, similar to the pattern shown above */}

          <div className="w-full max-w-sm rounded-lg border border-white-200 bg-white p-4 shadow sm:p-8 dark:border-white-700 dark:bg-white-800 bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              Standard plan
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-3xl font-semibold"></span>
              <span className="text-5xl font-extrabold tracking-tight"></span>
              <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
               
              </span>
            </div>
            <ul role="list" className="my-7 space-y-5">
              <li className="flex items-center">
                <svg
                  className="h-4 w-4 flex-shrink-0 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="ms-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  2 team members
                </span>
              </li>
              <li className="flex">
                <svg
                  className="h-4 w-4 flex-shrink-0 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="ms-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  20GB Cloud storage
                </span>
              </li>
              <li className="flex">
                <svg
                  className="h-4 w-4 flex-shrink-0 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="ms-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Integration help
                </span>
              </li>
              <li className="flex">
                <svg
                  className="h-4 w-4 flex-shrink-0 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="ms-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Integration help
                </span>
              </li>
              <li className="flex">
                <svg
                  className="h-4 w-4 flex-shrink-0 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="ms-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Integration help
                </span>
              </li>
              <li className="flex">
                <svg
                  className="h-4 w-4 flex-shrink-0 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="ms-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Integration help
                </span>
              </li>
              <li className="flex">
                <svg
                  className="h-4 w-4 flex-shrink-0 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="ms-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Integration help
                </span>
              </li>
            </ul>
           
          </div>
          <div className="w-full max-w-sm rounded-lg border border-white-200 bg-white p-4 shadow sm:p-8 dark:border-white-700 dark:bg-white-800 bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              Standard plan
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-3xl font-semibold"></span>
              <span className="text-5xl font-extrabold tracking-tight"></span>
              <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
               
              </span>
            </div>
            <ul role="list" className="my-7 space-y-5">
              <li className="flex items-center">
                <svg
                  className="h-4 w-4 flex-shrink-0 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="ms-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  2 team members
                </span>
              </li>
              <li className="flex">
                <svg
                  className="h-4 w-4 flex-shrink-0 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="ms-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  20GB Cloud storage
                </span>
              </li>
              <li className="flex">
                <svg
                  className="h-4 w-4 flex-shrink-0 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="ms-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Integration help
                </span>
              </li>
              <li className="flex">
                <svg
                  className="h-4 w-4 flex-shrink-0 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="ms-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Integration help
                </span>
              </li>
              <li className="flex">
                <svg
                  className="h-4 w-4 flex-shrink-0 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="ms-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Integration help
                </span>
              </li>
              <li className="flex">
                <svg
                  className="h-4 w-4 flex-shrink-0 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="ms-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Integration help
                </span>
              </li>
              <li className="flex">
                <svg
                  className="h-4 w-4 flex-shrink-0 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="ms-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Integration help
                </span>
              </li>
            </ul>
           
          </div>
          <div className="w-full max-w-sm rounded-lg border border-white-200 bg-white p-4 shadow sm:p-8 dark:border-white-700 dark:bg-white-800 bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              Standard plan
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-3xl font-semibold"></span>
              <span className="text-5xl font-extrabold tracking-tight"></span>
              <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
               
              </span>
            </div>
            <ul role="list" className="my-7 space-y-5">
              <li className="flex items-center">
                <svg
                  className="h-4 w-4 flex-shrink-0 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="ms-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  2 team members
                </span>
              </li>
              <li className="flex">
                <svg
                  className="h-4 w-4 flex-shrink-0 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="ms-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  20GB Cloud storage
                </span>
              </li>
              <li className="flex">
                <svg
                  className="h-4 w-4 flex-shrink-0 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="ms-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Integration help
                </span>
              </li>
              <li className="flex">
                <svg
                  className="h-4 w-4 flex-shrink-0 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="ms-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Integration help
                </span>
              </li>
              <li className="flex">
                <svg
                  className="h-4 w-4 flex-shrink-0 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="ms-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Integration help
                </span>
              </li>
              <li className="flex">
                <svg
                  className="h-4 w-4 flex-shrink-0 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="ms-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Integration help
                </span>
              </li>
              <li className="flex">
                <svg
                  className="h-4 w-4 flex-shrink-0 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="ms-3 text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Integration help
                </span>
              </li>
            </ul>
           
          </div>
        </div>
        
       
      </div>
    </section>
  );
};

export default Offers;
