import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addName } from "../../../redux/actions/ActionName";
import "./CreateBlock.scss";

export const CreateBlock = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')

    const addObject = () => {
        dispatch(addName({ title: value }))
        setValue('')
    }

    return (
        <div className="Page__AddBlock">
            <input
                className="Page__Input"
                placeholder="Текст"
                value={value}
                onChange={(e) => setValue(e.target.value)} />
            <button
                className="Page__Button"
                onClick={() => addObject()}>Добавить
            </button>
        </div>)
}