import NavBar from "./NavBar";

export default function Home() {
  return (
    <>
    <NavBar/>
    

    <div className="container">
        <b><h1 id="home">Ui/Ux Designer</h1></b>
        <div className="card">
            Designing sleek, intuitive user experiences in my passion<br/>
                   I take joy in every pixel I plush.
        </div>
        <div className="logo">
            <img src="/images/graphic.png" alt="logo" />
        </div>
    </div>
    </>
  )
}
