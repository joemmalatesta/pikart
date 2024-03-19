"use client";
import React, { useEffect } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  // Whole thing just to have the favicon be seen for light/dark
	useEffect(() => {
		const changeFavicon = () => {
			const lightModeIcon = "logo-dark.svg";
			const darkModeIcon = "logo.svg";
			const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

			let linkElement: HTMLLinkElement = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
			if (!linkElement) {
				linkElement = document.createElement("link");
				linkElement.rel = "icon";
				document.head.appendChild(linkElement);
			}
			linkElement.type = "image/svg+xml";
			linkElement.href = prefersDarkScheme.matches ? darkModeIcon : lightModeIcon;

			const handleChange = (e: MediaQueryListEvent) => {
				linkElement.href = e.matches ? darkModeIcon : lightModeIcon;
			};

			prefersDarkScheme.addEventListener("change", handleChange);

			// Cleanup function to remove event listener
			return () => prefersDarkScheme.removeEventListener("change", handleChange);
		};

		changeFavicon();
	}, []);

	return (
		<html lang="en">
			<head>
				<title>PikArt</title>
				<meta name="description" content="Draw things and make shapes. whatever" />
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
