import ProductADD from './../../components/add-product/addProduct'
import ListProduct from './../../components/list-product/list-product'

export default function Dashboard(){
    return (
        <main className='row'>
            
            <ProductADD />
            <ListProduct />

        </main>
    )
}