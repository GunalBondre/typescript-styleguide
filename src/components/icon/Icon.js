import { IconWrapper } from './Icon.style';
import iconPath from '../../libraries/iconsLib';

const defaultStyles = { display: 'inline-block', verticalAlign: 'middle' };

const Icon = ({ size, color, name, className, style, viewBox }) => {
	style = { ...defaultStyles, ...style };

	return (
		<IconWrapper
			size={size}
			color={color}
			name={name}
			className={className}
			style={style}
			viewBox={viewBox}
			width={`${size}px`}
			height={`${size}px`}
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
		>
			<path fill={color} d={iconPath[name]} />
		</IconWrapper>
	);
};

Icon.defaultProps = {
	size: 16,
	color: '#000000',
	viewBox: '0 0 24 24',
	style: {},
	className: '',
};
export default Icon;
