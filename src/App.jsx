import Calculator from "./components/Calculator"

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center align gap-6 h-screen">
      <Calculator />
      <p>
        Developed by 🕹️{' '}
        <span className=" font-semibold text-red-500">Pratik Kumar</span>
      </p>
    </div>
  )
}
export default App