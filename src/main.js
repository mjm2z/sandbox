import { styled } from '@stitches/react';

const MainContent = styled('div', {
	border: '2px solid blue',
	width: '100%',
	height: '100%',
});

const Main = ({ children }) => {
	return <MainContent>{children}</MainContent>;
};

export default Main;
