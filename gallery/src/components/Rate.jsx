export const Star = ({ value, active, onClick }) => {
    return (
        <span className={active ? 'active' : 'star'}>
            <button type="button" onClick={onClick} aria-label={`Calificar con ${value} estrellas`}>
                {'\u2605'}
            </button>
        </span>
    );
}; 

export const Rate = ({editaRate, id, rate}) => {
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="stars">
            {
                stars.map((star) => (
                    <Star
                        key={star}
                        value={star}
                        active={star <= rate}
                        onClick={() => editaRate(id, star)}
                    />
                ))
            }
            <br />
            <span>{rate}</span>
        </div>
    )
}
