import Navbar from "./Navbar"

export default function Layout({ extraClass, children }){

  let layoutClass = "layout " + extraClass

  return (
    <>
      <Navbar />
      <div className={layoutClass}>
        {children}
      </div>
    </>
  )
}