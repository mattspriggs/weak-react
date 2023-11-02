import Color from './Color'

const color: string[] = ['red', 'green', 'yellow', 'blue']
const player: string[] = []
const patternLength = 10
const pc: string[] = []
function getRandomIndex(num: number) {
  return Math.floor(Math.random() * num)
}

function generatePc() {
  for (let i = 0; i < patternLength; i++) {
    pc.push(color[getRandomIndex(color.length - 1)])
  }
}
generatePc()
console.log(getRandomIndex(color.length))
console.log(pc)

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
