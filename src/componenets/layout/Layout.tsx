import Nav from "../navbar/Nav"


interface ILayout {
  children: React.ReactNode
}

export default function Layout({ children }: ILayout) {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}
