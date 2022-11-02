import React, { ReactNode, ReactElement } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

type LinkProps = {
	href: string
	activeClassName?: string
	inactiveClassName?: string
	className?: string
	children: string
	rest?: object
}


function Link({
	href,
	activeClassName,
	inactiveClassName,
	className,
	children,
	...rest
	}:LinkProps):ReactElement {
	const router = useRouter();

	let currentClassName = className;
	let isActive = router.pathname === href;
	if (isActive) {
		currentClassName += ` ${activeClassName}`;
	} else {
		currentClassName += ` ${inactiveClassName}`;
	}

	return (
		<NextLink href={href} {...rest}>
			<a className={currentClassName}>{children}</a>
		</NextLink>
	);
}


export default Link;