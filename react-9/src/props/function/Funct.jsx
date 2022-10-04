import Blas from "./Blas"

let Funct = () => {
  let name = 'NTR'
  let award = 'best dancer'
  let debute = 'student no 1'
  return (
    <div>
      <h1>func component</h1>
      <Blas nam={name} awar={award} deb={debute}/>

    </div>
  )
}

export default Funct
