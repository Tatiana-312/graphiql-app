import { FC } from "react";

const TypeRef: FC<any> = ({ typeRef }) => {

    if (typeRef.kind === 'OBJECT') {
        return (
            <a
                href={`#${typeRef.name}`}
            >
                {typeRef.name}
            </a>
        );
    } else if (typeRef.kind === "NON_NULL") {
        return (
            <span>
                <TypeRef typeRef={typeRef.ofType} />
                !
            </span>
        );
    } else if (typeRef.kind === 'LIST') {
        return (
            <span>
                [
                <TypeRef typeRef={typeRef.ofType} />
                ]
            </span>
        );
    }

    throw new Error(`Unknown type ref: ${typeRef.toString()}`);

    // return (<span>{typeRef.name}</span>)
}

export default TypeRef;