import BlockFooter from '../components/BlockFooter'
function Footer (props){
    return (
        <>
            <div className='container-top'>
                <img className='image' src='https://assets2.nssmag.com/extensions/nss/images/logo-w.svg' />
            </div>
            <div className="container-middle">
                <BlockFooter title="COMPANY" sectionOne="ABOUT" sectionTwo="CONTACTS" sectionThree="NSS FACTORY" />
                <BlockFooter title="LEGAL" sectionOne="PRIVACY POLICY" sectionTwo="GESTISCI COOKIE"/>
                <BlockFooter title="MAGAZINE" sectionOne="FASHION" sectionTwo="CULTURE" sectionThree="PORTRAIT" sectionFour="R&D"/>
                <BlockFooter title="NETWORK" sectionOne="NSS MAGAZINE" sectionTwo="NSS SPORTS" sectionThree="NSS GALLERIA" />
                <BlockFooter title="NEWSLETTER" sectionOne="ISCRIVITI ALLA NOSTRA" sectionTwo="NEWSLETTER"/>
            </div>
            <div className="bg-black">
                <p className="text-white text-center p-3">Copyright ©2023 nss magazine srls - All rights reserved - Built with Brownie</p>
            </div>
        </>
    )
}
export default Footer