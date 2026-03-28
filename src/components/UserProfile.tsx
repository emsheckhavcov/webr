type Props = {
    firstname: string;
    lastname: string;
    email?: string;
    birthyear: number;
}

export function UserProfile(props: Props) {
    return <><p>{props.firstname}</p>
    <p>{props.lastname}</p>
    <p>{props.email}</p>
    <p>{props.birthyear}</p>
    </>
}