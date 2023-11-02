import Color from './Color'

const color: string[] = ['red', 'green', 'yellow', 'blue']
const player: string[] = []
const pc: string[] = []
function getRandomColor(array: string[]) {
  return array.push(color[Math.floor(Math.random() * color.length - 1)])
}
console.log(getRandomColor(pc))

function Home() {
  return (
    <>
      <div>
        <h1>Welcome to Dev Says!</h1>
        <h2>Home of Dev Says!</h2>
        <p>See if you can follow the pattern!</p>
        <Color />
        <Color />
        <Color />
        <Color />
      </div>
    </>
  )
}

export default Home
