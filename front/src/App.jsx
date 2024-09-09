
import './App.css'
import axios from 'axios'
function App() {

axios.get('http://localhost:3000')
.then((data)=>{
console.log(data.data)
})
.catch(err => console(err))
  return (
    <>
    
    </>
  )
}

export default App
