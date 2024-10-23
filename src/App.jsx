import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import Card from "./components/card/Card"

export default function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Card
              img="./src/images/katie-zaferes.png"
              rating="5.0"
              reviewCount={6}
              country="Netherlands"
              title="Life Lessons with Katie Zaferes"
              price={136}
            />
        </>
    )
}
