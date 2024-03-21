import { SVGIcon } from "./types";

export const tools: SVGIcon[] = [
	{
		id: 0,
		name: "pointer",
		svgString: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#000"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-pointer"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7.904 17.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l4.907 4.907a1.067 1.067 0 0 0 1.509 0l1.047 -1.047a1.067 1.067 0 0 0 0 -1.509l-4.907 -4.907l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563z" /></svg>`,
		xOffset: 0,
		yOffset: 0,
	},
	{
		id: 1,
		name: "brush",
		svgString: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#000"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brush"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21v-4a4 4 0 1 1 4 4h-4" /><path d="M21 3a16 16 0 0 0 -12.8 10.2" /><path d="M21 3a16 16 0 0 1 -10.2 12.8" /><path d="M10.6 9a9 9 0 0 1 4.4 4.4" /></svg>`,
		xOffset: 0,
		yOffset: 0,
	},
	{
		id: 2,
		name: "bucket",
		svgString: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#000"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-bucket-droplet"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 16l1.465 1.638a2 2 0 1 1 -3.015 .099l1.55 -1.737z" /><path d="M13.737 9.737c2.299 -2.3 3.23 -5.095 2.081 -6.245c-1.15 -1.15 -3.945 -.217 -6.244 2.082c-2.3 2.299 -3.231 5.095 -2.082 6.244c1.15 1.15 3.946 .218 6.245 -2.081z" /><path d="M7.492 11.818c.362 .362 .768 .676 1.208 .934l6.895 4.047c1.078 .557 2.255 -.075 3.692 -1.512c1.437 -1.437 2.07 -2.614 1.512 -3.692c-.372 -.718 -1.72 -3.017 -4.047 -6.895a6.015 6.015 0 0 0 -.934 -1.208" /></svg>`,
		xOffset: 0,
		yOffset: 0,
	},
	{
		id: 3,
		name: "pencil",
		svgString: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#000"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-pencil"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" /></svg>`,
		xOffset: 6,
		yOffset: 23,
	},
	{
		id: 4,
		name: "shapes",
		svgString: `<svg width="47" height="43" viewBox="0 0 47 43" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 33C1 34.1819 1.23279 35.3522 1.68508 36.4442C2.13738 37.5361 2.80031 38.5282 3.63604 39.364C4.47177 40.1997 5.46392 40.8626 6.55585 41.3149C7.64778 41.7672 8.8181 42 10 42C11.1819 42 12.3522 41.7672 13.4442 41.3149C14.5361 40.8626 15.5282 40.1997 16.364 39.364C17.1997 38.5282 17.8626 37.5361 18.3149 36.4442C18.7672 35.3522 19 34.1819 19 33C19 31.8181 18.7672 30.6478 18.3149 29.5558C17.8626 28.4639 17.1997 27.4718 16.364 26.636C15.5282 25.8003 14.5361 25.1374 13.4442 24.6851C12.3522 24.2328 11.1819 24 10 24C8.8181 24 7.64778 24.2328 6.55585 24.6851C5.46392 25.1374 4.47177 25.8003 3.63604 26.636C2.80031 27.4718 2.13738 28.4639 1.68508 29.5558C1.23279 30.6478 1 31.8181 1 33Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14 3C14 2.46957 14.2107 1.96086 14.5858 1.58579C14.9609 1.21071 15.4696 1 16 1H30C30.5304 1 31.0391 1.21071 31.4142 1.58579C31.7893 1.96086 32 2.46957 32 3V17C32 17.5304 31.7893 18.0391 31.4142 18.4142C31.0391 18.7893 30.5304 19 30 19H16C15.4696 19 14.9609 18.7893 14.5858 18.4142C14.2107 18.0391 14 17.5304 14 17V3Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M34.3632 24.959L26.2565 39.0177C26.0894 39.3183 26.001 39.6591 26 40.0062C25.9991 40.3534 26.0856 40.6947 26.2511 40.9963C26.4165 41.2979 26.6551 41.5492 26.9431 41.7253C27.2311 41.9014 27.5585 41.9961 27.8926 42H44.1079C44.442 41.996 44.7691 41.9013 45.057 41.7252C45.3449 41.5492 45.5834 41.298 45.7488 40.9965C45.9142 40.6951 46.0008 40.354 46 40.007C45.9992 39.66 45.9109 39.3193 45.7441 39.0187L37.6374 24.958C37.4669 24.6656 37.2266 24.4238 36.9398 24.256C36.653 24.0882 36.3294 24 36.0003 24C35.6711 24 35.3475 24.0882 35.0608 24.256C34.774 24.4238 34.5337 24.6656 34.3632 24.958V24.959Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
		xOffset: 0,
		yOffset: 0,
	},
	{
		id: 5,
		name: "text",
		svgString: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#000"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-text-size"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7v-2h13v2" /><path d="M10 5v14" /><path d="M12 19h-4" /><path d="M15 13v-1h6v1" /><path d="M18 12v7" /><path d="M17 19h2" /></svg>`,
		xOffset: 0,
		yOffset: 0,
	},
	{
		id: 6,
		name: "eraser",
		svgString: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#000"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-eraser"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3" /><path d="M18 13.3l-6.3 -6.3" /></svg>`,
		xOffset: 6,
		yOffset: 23,
	},
	{
		id: 7,
		name: "export",
		svgString: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#000"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-file-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 15h6" /><path d="M12.5 17.5l2.5 -2.5l-2.5 -2.5" /></svg>`,
		xOffset: 0,
		yOffset: 0,
	},
];
