interface minhaProps {

    title: string;
    description: string;

}

function HomeProps(props: minhaProps) {
    return (
        <div>
            <div>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    );
}


export default HomeProps;