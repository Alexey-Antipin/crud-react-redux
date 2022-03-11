import React from "react";
import { useDispatch } from 'react-redux';
import { EditName, deleteName } from "../../../redux/actions/ActionName";
import "./RedactionBlock.scss";
export const RedactionBlock = ({ turnOn, setTurnOn, item, valueText }) => {

    const dispatch = useDispatch()

    // Сохранение
    const EditObject = () => {
        dispatch(
            EditName(
                {
                    id: item.id,
                    title: valueText
                }))
            console.log(turnOn)
        setTurnOn(!turnOn)
    }

    return (
        <div className="Page__controlButtons">
            <button
                className="Page__Button"
                onClick={() => dispatch(deleteName({ id: item.id }))}>Удалить
            </button>

            {
                turnOn == false ?
                    <button
                        className="Page__Button"
                        onClick={() => setTurnOn(!turnOn)}>
                        Изменить
                    </button>
                    :
                    <button
                        className="Page__Button"
                        onClick={() => EditObject()}>
                        Сохранить
                    </button>
            }
        </div>)
}