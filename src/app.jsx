import Navbar from "./components/Navbar"
import Main from "./components/Main"
// import jokes from "./jokes"

export default function App() {
    // const ninjaTurtle = ["Donytello" , "Micheal angelo", "raphael", "leo"]

    
    // const jokesElements = jokes.map((joke) => {
    //     return <joke
    //     key = {entry.id}
    //     setup={joke.setup} punchline= {joke.punchline} />
    // })
    return (
        <>
         <Navbar />
          <Main />
        </>

    //    <main> <h2>{ninjaTurtle[0]}</h2>
    //    <h2>{ninjaTurtle[1]}</h2>
    //    <h2>{ninjaTurtle[2]}</h2>
    //    <h2>{ninjaTurtle[3]}</h2></main>

//     <main>
// {jokesElements}
//     </main>
    )
}





const num = [1,2,3,4,5]

const squares = num.map((x) => {
    return x * x})

console.log(squares)

const names = ["alice", "bob", "charlie" ,"danielle"]

const capitalized = names.map((x) => {
    return x[0].toUpperCase() + x.slice(1)
})

console.log(capitalized)


const pokemon = ["Bulbasaur", "Charnander", "Squirtle"]             //implicit returns

const poke = pokemon.map((x)=> `<p>${x}  </p>`
)

console.log(poke)