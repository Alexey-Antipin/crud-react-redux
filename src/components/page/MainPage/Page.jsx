import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getName } from "../../../redux/actions/ActionName";
import { CreateBlock } from "../Blocks/CreateBlock";
import { RedactionArea } from "../Blocks/RedactionArea";
import { RedactionBlock } from "../Blocks/RedactionBlock";
import "./Page.scss";

export const Page = () => {

    const dispatch = useDispatch()
    const state_obj = useSelector((state) => state.rep.state_obj);
    const [turnOn, setTurnOn] = useState(false)
    const [valueText, setvalueText] = useState('')

    useEffect(() => {
        dispatch(getName())
    }, [])

    return (
        <div className="Page">
            {/* Создание блока */}
            <CreateBlock />

            {/* Показ блока */}
            <div className="Page__SeeBlock">
                {
                    state_obj.map((item, index) => {
                        return (
                            <div className="Poster" key={index}>
                                <div className="Poster__Border"></div>
                                <div className="Poster__Number">{item.id}</div>

                                <div className="Descreen">
                                    {/* Блок редактирование */}
                                    <RedactionArea
                                        item={item}
                                        turnOn={turnOn}
                                        index={index}
                                        setvalueText={setvalueText}
                                        state_obj={state_obj} />

                                    {/* Блок изменить, удалить, сохранить. */}
                                    <RedactionBlock
                                        turnOn={turnOn}
                                        setTurnOn={setTurnOn}
                                        item={item}
                                        valueText={valueText} />
                                </div>
                            </div>)
                    })}
            </div>
        </div>
    )
}