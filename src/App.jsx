import image from "./assets/images.jpeg"
function App() {

  return (
    <>
      <span className="flex justify-center bg-red-300 border">SAHIL MANE</span>

      <img className="w-10 h-10 rounded-full" src={image} alt="Rounded avatar" />
      <img className="w-10 h-10 rounded" src={image} alt="Default avatar" />
      <h1>sahilm manw</h1>

    </>
  )
}

export default App
