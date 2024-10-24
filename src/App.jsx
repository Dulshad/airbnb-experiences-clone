import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import Card from "./components/card/Card"
import data from "./data.js"

export default function App() {

    const cards = data.map((item) => {
        return (
            <Card
                key={item.id}
                img={`/src/images/${item.coverImg}`}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
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
