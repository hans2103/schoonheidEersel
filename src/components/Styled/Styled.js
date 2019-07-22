import React from 'react';

import styled from 'styled-components';

export const Wrapper = styled.section`
	padding: ${props => props.padding ? `${props.padding}` : "60px 16px"};
	color: ${props => props.textColor ? `${props.textColor}` : "currentColor"};
	background-color: ${props => props.backgroundColor ? `${props.backgroundColor}` : "#fff"};
	${props => props.img && `
		position: relative;
		background-image: url(${props.img});
		background-repeat: no-repeat;
		background-size: cover;
	`}
	${props => props.fixed && `
		@media (min-width: 1200px) {
			background-attachment: fixed;
		}
	`}
`;

export const WrapperGrid = styled.section`
	display: grid;
	grid-template-columns: [full-start] 1fr [full-end];

	@media (min-width: 680px) {
		grid-template-columns: [full-start] repeat(3, 1fr) [full-end];
	}
`;

export const Footer = styled.footer`
	text-align: center;
    color: #fff;
    background: #8d8276;
    padding: 60px 0;
`;

const e = React.createElement;

export const Title = styled(({tag, children, ...props}) => e(tag, props, children))`
  	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	margin-bottom: 60px;
	text-align: center;
	font-family: Nunito, sans-serif;
`;

Title.defaultProps = {
	tag: 'h2'
};
