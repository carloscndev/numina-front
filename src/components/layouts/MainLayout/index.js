// Import Modules
import React from 'react'

// Import Components
import Header from '../../presentacional/Header'
import Footer from '../../presentacional/Footer'
import Menu from '../../presentacional/Menu'
import Modal from '../../presentacional/Modal'
import LoadingSpinner from '../../presentacional/LoadingSpinner'

// Import Styles
import './styles.scss'

const MainLayout = ({
  children,
  mainLayout,
  setMenuVisible,
  setModalVisble,
  doLogout
}) => {
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
          <Menu
            setMenuVisible={setMenuVisible}
            doLogout={doLogout}
          />
      }
      {
        mainLayout.isModalVisible &&
          <Modal />
      }
      {
        mainLayout.isLoading &&
          <LoadingSpinner />
      }
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
