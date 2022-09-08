import Navbar from "./Navbar"

export default function Layout({ children}){
  return (
    <>
      <Navbar />
      <div className="layout">
        {children}
      </div>
    </>
  )
}