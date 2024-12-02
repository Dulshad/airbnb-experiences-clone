import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import Card from "./components/card/Card"
import data from "./data.js"

export default function App() {

    return (
        <>
            <Navbar/>
            <Hero/>
            <section className='cards_container'>
                {data.map((item) => (
                    <Card
                        key={item.id}
                        {...item}
                    />
                ))}
            </section>
        </>
    )
}
