import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ArticleDetail from '../components/ArticleDetail'
import DetailLang from '../components/DetailLang'
import NavMenu from '../components/NavMenu'
import Home from '../pages/Home'
import Outer from '../pages/Outer'

const AppRouter = () => {
  return (
    <Router>
        <NavMenu/>
        <Routes>
            <Route path='/' element={<Outer/>}>
                <Route index element={<Home/>}/>
                <Route path='/detail/:lang' element={<DetailLang/>}/>
                <Route path='/detail/:lang/:article' element={<ArticleDetail/>}/>
            </Route>
        </Routes>
    </Router>
  )
}

export default AppRouter