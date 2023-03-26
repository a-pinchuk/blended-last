import { StyledLink } from "./Navigation.styled";

export const Navigation = () => {
	return (
		<nav>
			<ul>
				<li>
					<StyledLink to="/">Home</StyledLink>
				</li>
				<li>
					<StyledLink to="users">Users</StyledLink>
				</li>
			</ul>
		</nav>
	);
};
