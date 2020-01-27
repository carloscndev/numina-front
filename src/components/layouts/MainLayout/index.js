// Import Modules
import React from 'react'

// Import Components
import Header from '../../presentacional/Header'
import Footer from '../../presentacional/Footer'

const MainLayout = ({ children }) => (
  <>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </>
)

export default MainLayout
