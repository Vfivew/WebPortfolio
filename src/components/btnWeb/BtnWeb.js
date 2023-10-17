 import vercelIcon from './vercelIcon.svg'

const BtnWeb = ({ link }) => {
	return (
		<a href={link} target="_blank" rel="noreferrer" className="btn-outline">
			<img src={vercelIcon} alt="" />
			Vercel
		</a>
	);
};

export default BtnWeb;