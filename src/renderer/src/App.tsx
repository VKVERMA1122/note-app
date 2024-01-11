import { Content, RootLayout, Sidebar } from "./components/AppLayout"
import { DraggableTopBar } from "./components/DraggableTopBar"

const App = (): JSX.Element => {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p2 ">Sidebar</Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20 ">Content</Content>
      </RootLayout>
    </>
  )
}

export default App
