// Import Modules
import React, { useEffect } from 'react'

// Import Components
import Header from '../../presentacional/Header'
import Footer from '../../presentacional/Footer'

// Import Styles
import './styles.scss'

const MainLayout = ({
  children,
  mainLayout,
  setUser
}) => {
  useEffect(() => console.log(mainLayout))
  return (
    <div className='main-layout'>
      <Header user={mainLayout.user} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
