import logo from './assets/logo-white.svg';


function App() {

  const currentYear = new Date().getFullYear();

  return (
    <div className="flex items-center flex-col">
      <div className="text-white">
      <img src={logo} alt="One Future Sports Logo" className="h-12" />
      </div>
      <p className="mt-10 text-xs text-gray-600">&copy; {currentYear} One Future Sports Pty Ltd. All Rights Reserved.</p>
    </div>
  )
}

export default App
