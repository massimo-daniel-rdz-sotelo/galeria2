export const Contador = ({ clicks, average }) => {
	return (
		<div className="ratingSummary" aria-live="polite">
			<span>Clicks: {clicks}</span>
			<span>Calificación promedio: {average.toFixed(2)} / 5</span>
		</div>
	);
};
