import BlockFooter from '../components/BlockFooter'
function Footer (){
    return (
        <>
            <div className='container-top'>
                <img className='image' src='https://assets2.nssmag.com/extensions/nss/images/logo-w.svg' />
            </div>
            <div className='container-middle'>
                <BlockFooter/>
            </div>
        </>
    )
}
export default Footer