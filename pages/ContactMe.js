import HexagonGrid from '../components/assets/HexagonGrid';
const languages = [
  {
      id: "1",
      skill: "Python",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain-wordmark.svg"
  },
  {
      id: "2",
      skill: "Java",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain-wordmark.svg"
  },
  {
      id: "3",
      skill: "C",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg"
  },
  {
      id: "4",
      skill: "HTML",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
  },
  {
      id: "5",
      skill: "CSS",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
  },
  {
      id: "7",
      skill: "JavaScript",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
  },
  {
      id: "8",
      skill: "SQLite",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-plain-wordmark.svg"
  }
]
const tools = [
    {
        id: "1",
        skill: "GitHub",
        image: "devicon-github-original-wordmark"
    },
    {
        id: "2.js",
        skill: "React.js",
        image: "devicon-react-original-wordmark colored"
    },
    {
        id: "Next.js",
        image: "devicon-nextjs-plain colored"
    },
    {
        id: "Node.js",
        image: "devicon-nodejs-plain-wordmark colored"
    },
    {
        id: "Pandas",
        image: "devicon-pandas-original-wordmark"
    },
    {
        id: "Numpy",
        image: "devicon-numpy-original-wordmark colored"
    },
    {
        id: "Visual Studio Code",
        image: "devicon-vscode-plain-wordmark colored"
    },
    {
        id: "UML",
        image: "umple.png",
        type: "image"
    },
    {
        id: "Jupyter",
        image: "devicon-jupyter-plain-wordmark colored"
    },
    {
        id: "Pygame",
        image: "pygame.png",
        type: "image"
    }
]

// For each div containing a hex grid, change length to (129*lengthOfArray/2)
const ContactMe  = () => {
  return ( 
    <>
        <div>
            <div style={{width: "516px"}}>
            <HexagonGrid list={languages}/> 
            </div>
            <br/>
            <i style={{fontSize:"10vh", fontWeight:"800", marginLeft:"2rem", bottom: "0"}}>LANGUAGES</i>
        </div>
        <div style={{right:"0"}}>
            <i style={{fontSize:"10vh", fontWeight:"800"}}>TOOLS AND TECHNOLOGIES</i>
        </div>
    </>
   );
}
 
export default ContactMe;