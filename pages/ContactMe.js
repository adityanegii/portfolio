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
// For each div containing a hex grid, change length to (129*lengthOfArray/2)
const ContactMe  = () => {
  return ( 
    <>
    <div style={{width: "516px"}}>
      <HexagonGrid list={languages}/> 
    </div>
    </>
   );
}
 
export default ContactMe;