interface minhaProps {

    title: string;
    description: string;

}

function HomeProps(props: minhaProps) {
    return (
        <>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </>
    );
}


export default HomeProps;