import React from "react";

type NewComponentType = {
    students: StudentType[]
}

type StudentType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            {props.students.map((el, index)=>{
                return (
                    <li key={el.id}>{el.name} age: {el.age}</li>
                )
            })}
        </ul>
    )
}