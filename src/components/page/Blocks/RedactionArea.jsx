import React from "react";
import "./RedactionArea.scss";

export const RedactionArea = ({ item, turnOn, index, setvalueText, state_obj }) => {

    function changeText(index, event) {
        const copy = Object.assign([], state_obj);
        copy[index].title = event.target.value;
        const valueText = copy[index].title;
        setvalueText(valueText)
    }

    return (
        <div className="Page__Block">
            {/* Режим показа */}
            <div className="Page__Text">{item.title}</div>
            {/* Режим редактирования */}
            <div className="Page__Block_Area">
                {
                    turnOn == true ? <textarea
                        maxLength={50}
                        placeholder="Текст пуст"
                        className="Page__TextRedaction"
                        onChange={(event) => changeText(index, event)}
                        value={item.title} /> : <div></div>
                }
            </div>
        </div>
    )
}