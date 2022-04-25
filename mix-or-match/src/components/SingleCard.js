import './SingleCard.css';

const SingleCard = ({ card, handleChoice, flipped, disabled}) => {
    const handleClick = () => {
        if (!disabled) {
            handleChoice(card);
        }
	};

	return (
		<div className='card'>
			<div className={flipped ? 'flipped' : ''}>
				<img src={card.src} alt='card front' className='front' />
				<img
					onClick={handleClick}
					src='/img/cover.png'
					alt='card back'
					className='back'
				/>
			</div>
		</div>
	);
};

export default SingleCard;
