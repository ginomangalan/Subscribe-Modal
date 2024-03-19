import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="h-screen flex flex-col items-center gap-6 bg-gradient-to-b from-purple-600 to-blue-600 text-white">
        <h1 className="text-7xl font-bold mt-10">AI App Development Course</h1>
        <p className="text-2xl mt-10 ml-20 mr-20 text-center">
          Welcome to our most popular 7 day free course on AI app development.
          We have packed everything that you need to know from start to end in
          one single E-book. Subscribe for free and download the ebook today to
          get started. Happy coding!
        </p>
        <h1 className="text-3xl font-bold mt-8">Subscribe & Download E-book</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-black px-4 py-2 rounded-lg text-lg"
        >
          Subscribe
        </button>
        {showModal && <Modal onClose={() => setShowModal(false)} />}
      </div>
    </>
  );
}

export default App;
