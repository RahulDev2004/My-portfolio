import { v4 as uuidv4 } from 'uuid';
// import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/21.png';
import GreenCtgImg from '../images/22.png';
import CoinTrackerImg from '../images/26.png';
import CavinImg from '../images/25.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Gamified Learning',
    desc: 'Dystopian is a gamified learning platform that allows students to learn programming easily through bite-sized lessons built into the plot of the game. Students can also compete with each other in the leaderboard',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'XDC Health',
    desc: 'Built for PLI Blockathon 2022, XDC Health is an Electronic Healthcare Management System built upon XDC Blockchain allowing healthcare recorrds to be stored on the blockchain.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Nerd Dev',
    desc: 'It is a dynamic blogging platform that empowers writers to share their thoughts with a global audience. Seamlessly designed, it offers intuitive UI, customizable themes, rich multimedia integration, and robust SEO features.',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Highter',
    desc: 'The ultimate platform for college prediction and discovery. Leverage our advanced algorithms and comprehensive database to accurately predict the ideal college for your future studies. Explore recommendation & make decisions, ',
    img: CavinImg,
  },
  // {
  //   id: uuidv4(),
  //   name: 'Tracking Soft',
  //   desc: 'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
  //   img: ProjectImg,
  // },
];

export default projects;
