import React from 'react';
import styled from 'styled-components';

const ComponentBtn = styled.button`
	font-size: var(--normal-txt);
	font-weight: 500;
	line-height: 24px;
	text-align: center;
	padding: 4px 35px;
	color: ${(props) => (props.color ? props.color : 'var(--text-10)')};
	border: ${(props) => (props.border ? props.border : '2px solid var(--blue-40)')};
	border-radius: 6px;
	background: ${(props) => (props.background ? props.background : 'none')};
	transition: 0.4s linear;
	cursor: pointer;
	&:hover {
		background-color: ${(props) =>
			props.hoverBackground ? props.hoverBackground : 'var(--blue-30)'};
		color: var(--clr-glow-20);
		transform: scale(1.1);
	}
`;

const CreateButton = (props) => {
	return (
		<ComponentBtn as="a" href="https://youtube.com/" target="_blank" {...props}>
			{props.children}
		</ComponentBtn>
	);
};

export default CreateButton;
