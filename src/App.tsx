import React from "react";
import "./index.css";

function App() {
  return (
    <div className="App mx-auto min-h-screen bg-teal-50">
      {/* Header */}
      <header>
        <section className="flex items-center">
          <div className="w-full max-w-screen-xl px-4 mx-auto lg:px-12">
            <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
              <div className="flex-row items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
                <div>
                  <h5 className="mr-3 font-semibold dark:text-white">
                    Athlestat
                  </h5>
                  <p className="text-gray-500 dark:text-gray-400">
                    User options bar.
                  </p>
                </div>
                <button
                  type="button"
                  className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5 mr-2 -ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                  </svg>
                  Add new user
                </button>
              </div>
            </div>
          </div>
        </section>
      </header>
      <aside>
        <nav>
          App section links.
          <ul>
            <li>Dashboard</li>
            <li>Settings</li>
            <li>Log In/Out</li>
          </ul>
        </nav>
      </aside>
      <section>
        <h1>Majority of the interface.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet possimus
          ullam blanditiis nam neque praesentium eos id est tempora ratione?
          Modi natus alias perferendis numquam! Quidem facilis ipsum odit
          minima.
        </p>
      </section>
      <footer>Other less relevant links.</footer>
    </div>
  );
}

export default App;
