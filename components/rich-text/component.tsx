import style from "./styles.module.scss";

interface RichTextProps {
	constrain?: boolean;
	children: React.ReactNode;
}

export const RichText = ({ children, constrain }: RichTextProps): React.ReactElement => {
	const classNames = constrain ? `${style.container} ${style.constrain}` : style.container;

	return <div className={classNames}>{children}</div>;
};
