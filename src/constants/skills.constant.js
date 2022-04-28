import htmlIcon from '../assets/icons/skills/html.svg';
import cssIcon from '../assets/icons/skills/css.svg';
import javascriptIcon from '../assets/icons/skills/javascript.svg';
import reactIcon from '../assets/icons/skills/react.svg';
import packageIcon from '../assets/icons/skills/package-manager.svg';
import synchronizeIcon from '../assets/icons/settings/synchronize.svg';
import sassIcon from '../assets/icons/skills/sass.svg';
import nodeJSIcon from '../assets/icons/skills/nodeJS.svg';
import expressJSIcon from '../assets/icons/skills/expressJS.svg';
import mongoDBIcon from '../assets/icons/skills/mongodb.svg';
import recoilJSIcon from '../assets/icons/skills/recoilJS.svg';
import styledComponentsIcon from '../assets/icons/skills/styled-components.svg';
import framerMotionIcon from '../assets/icons/skills/framer-motion.svg';
const frontEndData = [
	{
		id: 1,
		name: 'html',
		icon: htmlIcon,
		title: 'HTML, CSS & Sass',
		description:
			'Basics of the web. HTML - Hyper Text Markup Language; CSS - Cascading Style Sheets; Sass - CSS pre-proccessor, shorter code and effective result.',
		icons: [ htmlIcon, cssIcon, sassIcon ],
		uniqueKey: 'qpSfx',
		iconsUniqueKeys: [ 'HtMlIsAw', 'assCss', 'sQsassIsMor' ]
	},
	{
		id: 2,
		name: 'javascript',
		icon: javascriptIcon,
		description:
			'JavaScript - the source of the web. My most favourite programming language. Simple, High-Quality code does all the good things we know.',
		title: 'Vanilla JavaScript',
		icons: [ javascriptIcon ],
		uniqueKey: 'AoTbs',
		iconsUniqueKeys: [ 'JaVaAndJaVaScRipTAreSiMiLaR' ]
	},
	{
		id: 3,
		name: 'react',
		icon: reactIcon,
		description:
			'This is React JS framework (React is a library) is the way of the JavaScript developer. Pages are very dynamic without even reloading. My most liked is React JS.',
		title: 'React JS',
		icons: [ reactIcon ],
		uniqueKey: 'LsRTsq',
		iconsUniqueKeys: [ 'ReAcTIsbEtTeRtHanVuE' ]
	},
	{
		id: 4,
		name: 'recoil',
		icon: recoilJSIcon,
		description:
			"This is Recoil JS which is the best solution for props drilling. It's a new technology, nevertheless It can be used instead of Redux.",
		title: 'Recoil JS',
		icons: [ recoilJSIcon ],
		uniqueKey: 'IcQfTH',
		iconsUniqueKeys: [ 'ReCoIlIsMuCHBeTtEEr' ]
	},
	{
		id: 5,
		name: 'styled-componentAndFramer-motion',
		icon: '💅',
		description:
			"These packages make my front-end development life easier. I use styled-component for DRY methodology, and I use framer-motion for blocks' animations or for elements's animations.",
		title: 'Styled-components & Framer-Motion',
		uniqueKey: 'TsPxVTggQ',
		icons: [ styledComponentsIcon, framerMotionIcon ],
		iconsUniqueKeys: [ 'IppQascSrfae' ]
	}
];

const backEndData = [
	{
		id: 1,
		name: 'nodeJS',
		icon: nodeJSIcon,
		title: 'Node & Express',
		description:
			"JavaScript moves from client-side to server-side. Seems cool, isn't it? Node.js does support data saving in the backend. With the help of Express.js, we could make an MVC pattern or modern REST API in an easy way.",
		icons: [ nodeJSIcon, expressJSIcon ] ,
		iconsUniqueKeys: ['ExxxPreeeeSSJSS']                 
	},
	{
		id: 2,
		name: 'mongoDB',
		icon: mongoDBIcon,
		description:
			'Databases to build fully completed websites. All Data are stored in these technologies.',
		title: 'Mongo DB',
		icons: [ mongoDBIcon ] ,
		iconsUniqueKeys: ['MLongAoDB']
	}
];

const extraSkillsData = [
	{
		name: 'extraSkills',
		icon: htmlIcon,
		skills: [
			{
				name: 'figma',
				id: 1,
				link: 'https://figma.com/'
			},
			{
				name: 'BEM',
				link: 'http://getbem.com/',
				id: 2
			},
			{
				name: 'Semantic-layout',
				link: 'https://www.freecodecamp.org/news/semantic-html5-elements/',
				id: 3
			},
			{
				name: 'Emmet',
				link: 'https://emmet.io/',
				id: 4
			}
		],
		id: 1
	},
	{
		name: 'extraSkills',
		icon: cssIcon,
		skills: [
			{
				name: 'SASS',
				link: 'https://sass-lang.com/',
				id: 1
			},
			{
				name: 'Less',
				link: 'https://lesscss.org/',
				id: 2
			},
			{
				name: 'Responsive layout',
				link:
					'https://www.freecodecamp.org/news/responsive-web-design-modern-website-code-for-beginners/',
				id: 3
			}
		],
		id: 2
	},
	{
		name: 'extraSkills',
		icon: packageIcon,
		skills: [
			{
				name: 'Webpack',
				link: 'https://webpack.js.org/',
				id: 1
			},
			{
				name: 'Vite',
				link: 'https://vitejs.dev/',
				id: 2
			}
		],
		id: 3
	},
	{
		name: 'extraSkills',
		icon: synchronizeIcon,
		skills: [
			{
				name: 'Git',
				link: 'https://www.freecodecamp.org/news/git-and-github-for-beginners/',
				id: 1
			}
		],
		id: 4
	},
	{
		name: 'extraSkills',
		icon: reactIcon,
		skills: [
			{
				name: 'Styled Components',
				link:
					'https://www.freecodecamp.org/news/styled-components-essentials-in-three-steps/',
				id: 1
			},
			{
				name: 'Framer Motion',
				link: 'https://www.framer.com/motion/',
				id: 2
			},
			{
				name: 'Tilt JS',
				link: 'https://gijsroge.github.io/tilt.js/',
				id: 3
			},
			{
				name: 'Paralax JS',
				link: 'https://www.youtube.com/watch?v=tb_Bk00NKnE',
				id: 4
			},
			{
				name: 'Recoil JS',
				link: 'https://recoiljs.org/',
				id: 5
			}
		],
		id: 5
	}
];

export { frontEndData, backEndData, extraSkillsData };
