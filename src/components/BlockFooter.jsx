function BlockFooter(props){
    return (
        <>
        <div className="block-footer">
            <h3>{props.title}</h3>
            <p>{props.sectionOne}</p>
            <p>{props.sectionTwo}</p>
            <p>{props.sectionThree}</p>
            <p>{props.sectionFour}</p>
        </div>
        </>
    )
}
export default BlockFooter