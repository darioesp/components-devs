import { css } from 'lit';
export const buttonCss = css`
	.ds-material-button {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
			Roboto, 'Helvetica Neue', Arial, sans-serif;
		border-radius: 7px;
		background-color: #25d366;
		color: #fff;
		font-size: 14px;
		font-weight: 500;
		line-height: 18px;
		padding: 10px 16px;
		text-transform: uppercase;
		text-decoration: none;
		transition: all 0.2s ease-in-out;
		cursor: pointer;
		border: none;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
		display: inline-flex;
		align-items: center;
	}
	.ds-material-button img {
		margin-right: 10px;
		font-size: 10px;
		width: 30px;
		height: 30px;
	}
`;
