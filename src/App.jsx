import LineGraph from "./Chart/LineGraph"
import Footer from "./Footer/Footer"
import Header from "./header/Header"
import Product from "./products/Product"

function App() {

  return (
    <>
      <Header></Header>
      <h1 className="text-5xl font-bold text-center mt-[200px]">Latest Phone's</h1>
      <hr className="container mt-5 mx-auto" />
      <Product></Product>
      <LineGraph></LineGraph>
      <Footer></Footer>
    </>
  )
}

export default App
