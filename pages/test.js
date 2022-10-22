
const test = () => {
    const recievedDate = '2022-10-11';
    const arrayDate = recievedDate.split("-");
    const [year, month, day] = arrayDate;
    const dayInCharactersInFrensh = new Date(recievedDate).toLocaleString('fr-FR', { weekday: 'long' })
    const monthInCharactersInFrensh = new Date(recievedDate).toLocaleString('fr-FR', { month: 'long' })



    return (
        <>
            <h1>day In Characters : {dayInCharactersInFrensh}</h1>
            <h1>month In Characters : {monthInCharactersInFrensh}</h1>
            <h1>day : {day}</h1>
            <h1>month : {month}</h1>
            <h1>year : {year}</h1>
        </>
    )
}


export default test