// Import Modules
import React, { useEffect } from 'react'

// Import Components
import Header from '../../presentacional/Header'
import Footer from '../../presentacional/Footer'
import Menu from '../../presentacional/Menu'
import Modal from '../../presentacional/Modal'

// Import Styles
import './styles.scss'

const MainLayout = ({
  children,
  mainLayout,
  setUser,
  setMenuVisible,
  setModalVisble
}) => {
  useEffect(() => console.log(mainLayout))
  return (
    <div className={`
    ${'main-layout'}
    ${mainLayout.isMenuVisible ? 'hiden' : ''}
    ${mainLayout.isModalVisble ? 'hiden' : ''}
    ${mainLayout.isLoading ? 'hiden' : ''}
  `}
    >
      <Header
        user={mainLayout.user}
        isMenuVisible={mainLayout.isMenuVisible}
        setMenuVisible={setMenuVisible}
      />
      {
        mainLayout.isMenuVisible &&
          <Menu setMenuVisible={setMenuVisible} />
      }
      {
        mainLayout.isModalVisible &&
          <Modal />
      }
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
