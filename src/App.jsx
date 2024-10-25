import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import Card from "./components/card/Card"
import data from "./data.js"

export default function App() {

    const cards = data.map((item) => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <>
            <Navbar/>
            <Hero/>
            <section className='cards-container'>
                {cards}
            </section>
        </>
    )
}
