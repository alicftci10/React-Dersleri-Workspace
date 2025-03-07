import { useEffect, useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'
import { Drawer } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { calculateBasket, removeFromBasket, setDrawer } from './redux/slices/basketSlice'

function App() {

  const { products, drawer, totalAmount } = useSelector((store) => store.basket)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket())
  }, [products])

  return (
    <PageContainer>
      <Header />
      <RouterConfig />
      <Loading />
      <Drawer anchor='right' open={drawer} onClose={() => dispatch(setDrawer())}>
        {
          products && products.map((product) => {
            return (
              <div key={product.id}>
                <div className='flex-row' style={{ padding: '20px' }}>
                  <img style={{ marginRight: '5px' }} src={product.image} width={50} height={50} />
                  <p style={{ width: '320px', marginRight: '5px' }}>{product.title}({product.count})</p>
                  <p style={{ fontWeight: 'bold', width: '60px', marginRight: '10px' }}>{product.price}TL</p>
                  <button onClick={() => dispatch(removeFromBasket(product.id))} style={{ padding: '5px', borderRadius: '5px', backgroundColor: 'rgb(185,76,76)', border: 'none', color: '#fff', width: '50px' }}>sil</button>
                </div>
                <h2></h2>
              </div>
            )
          })
        }
        <div>
          <p>toplam tutar : {totalAmount}</p>
        </div>
      </Drawer>
    </PageContainer>
  )
}

export default App
