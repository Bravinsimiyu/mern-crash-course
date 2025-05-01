import { Box, useColorModeValue } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import NavBar from "./components/NavBar"


function App() {

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreatePage />} />
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} /> */}

      </Routes>
    </Box>
  )
}

export default App
