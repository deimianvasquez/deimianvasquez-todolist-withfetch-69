import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import { Contact } from "./pages/Contact"
import { About } from "./pages/About"

import { Layout } from "./Layout"
import { Products } from "./pages/Products"
import { DetailProduct } from "./pages/DetailProduct"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />

                    <Route path="/product/:theId" element={<DetailProduct />} />

                    <Route path="*" element={<h1>Not found, 404</h1>} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}