import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MovieList from "../components/Movielist";
import AppNavbar from "../components/Navbar";

const movies = [
    {
      id: 1,
      title: "The Lion King",
      duration: "1 hour 28 minutes",
      description: "In the African savannah, a young lion prince named Simba is born to King Mufasa and Queen Sarabi. As heir to the throne, Simba is excited about his future, but tragedy strikes when his uncle Scar orchestrates Mufasa’s death and convinces Simba it was his fault. Simba flees the Pride Lands and grows up in exile, only to eventually return as an adult to claim his rightful place as king and restore balance to the circle of life.",
      casts: "Matthew Broderick as Adult Simba, Jonathan Taylor Thomas as Young Simba, James Earl Jones as Mufasa, Jeremy Irons as Scar, Moira Kelly as Adult Nala, Niketa Calame as Young Nala, Nathan Lane as Timon, Ernie Sabella as Pumbaa, Rowan Atkinson as Zazu, Robert Guillaume as Rafiki",
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn2.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcRu6K8z_pBKeeeG_ew9Xlk-JC0e4FEoE4Qx4nEpxP9dg88BuVze&psig=AOvVaw0QB4f0ZpT8mv36PGrzTYKE&ust=1744098644087000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPjpg_S3xYwDFQAAAAAdAAAAABAK"
    },
    {
      id: 2,
      title: "The Chronicles of Narnia",
      duration: "2 hours 23 minutes",
      description: "Four siblings Lucy, Edmund, Susan, and Peter are sent to the countryside during World War II and discover a magical wardrobe that transports them to the land of Narnia. There, they join forces with the noble lion Aslan to battle the White Witch, who has plunged the realm into eternal winter. As they confront challenges, betrayals, and epic battles, the children fulfill an ancient prophecy and help bring peace back to Narnia.",
      casts: "Georgie Henley as Lucy Pevensie, Skandar Keynes as Edmund Pevensie, Anna Popplewell as Susan Pevensie, William Moseley as Peter Pevensie, Tilda Swinton as The White Witch, James McAvoy as Mr. Tumnus, Liam Neeson as Aslan (voice), Jim Broadbent as Professor Kirke",
      image: "https://m.media-amazon.com/images/M/MV5BOTMwNjNmNDgtYWFhMi00NjRhLTk5YjAtMjNjYTVkYjQwOWQwXkEyXkFqcGc@._V1_.jpg"
    },
    {
      id: 3,
      title: "Wicked (Part One)",
      duration: " 2 hours 15 minutes ",
      description: "Based on the hit Broadway musical, Wicked tells the untold story of the witches of Oz — long before Dorothy dropped in. Elphaba, a misunderstood green-skinned girl with extraordinary powers, meets Glinda, a popular and ambitious student at Shiz University. Despite their differences, an unlikely friendship forms, one that will change their lives — and the Land of Oz — forever. The story dives into themes of identity, prejudice, power, and what it really means to be wicked",
      casts: "Cynthia Erivo as Elphaba, Ariana Grande as Glinda, Jonathan Bailey as Fiyero, Jeff Goldblum as The Wizard, Michelle Yeoh as Madame Morrible, Ethan Slater as Boq, Marissa Bode as Nessarose",
      image: "https://snworksceo.imgix.net/cds/0758fe31-7a8d-469f-8f9a-d5e62f72f457.sized-1000x1000.jpg?w=1000&dpr=2"
    }
  ];
  

function DashboardPage() {
  const navigate = useNavigate();

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <>
      <AppNavbar />
      <div 
        style={{
          background:"linear-gradient(to left, grey, black)",
          minHeight: "100vh",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
        >
      <Container className="mt-4">
        <h2 className="mb-4" style={{color:"white"}}>Movie List</h2>
        <MovieList movies={movies} onCardClick={handleMovieClick} />
      </Container>
    </div>
    </>
  );
}

export default DashboardPage;