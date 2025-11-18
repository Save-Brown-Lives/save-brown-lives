// // pages/About.jsx
//import components
import Card from "../components/Card.jsx";
export default function About() {
  return (
    <>
      <main>
        <h2> About SBL (Save Brown Lives) </h2>
        <p>
          {" "}
          Conceived after the unfortunate events of 2020, this idea was a
          brainchild of Rucha Nimbalkar. To create a centralized place of
          resources and save innocent lives, this project idea was pitched by
          Rucha at the GDI (Girls Develop It) hackathon. After finding like
          minded people who cared about the cause, a team was formed and the
          project started development and was presented on the last day of
          hackathon.{" "}
        </p>
        <h2> Meet the Team </h2>
        <div className="team-div">
          <Card
            aLink="https://www.linkedin.com/in/makeba-cappiello-047485324/"
            aText=" Makeba Cappiello"
            pText=" I’m a creatively different thinker with a background in Graphic
          Design, HTML, CSS, JavaScript, SQL, Node.js, React, and Express which
          brings a unique perspective to my technical work. I’ve always embraced
          an artistic, out-of-the-box mindset, even when it made me stand out.
          I’ve been teased for it, but I believe that creativity and innovation
          should never be stifled, and no one should have to dull their
          uniqueness to fit in. As a backend developer, I don’t just write
          code—I imagine what’s possible"
          />
          <Card aLink="" aText="Bakari Roscoe" pText="" />
          <Card aLink="" aText="Chigö Ozor" pText="" />
          <Card
            aLink="https://www.linkedin.com/in/ruchanimbalkar/"
            aText="Rucha Nimbalkar"
            pText="I am a full stack developer and I want to use my skills to help others."
          />
          <div className="gdi-div">
            <h3>Third Place in GDI hackathon</h3>
            <p>
              The Judges of GDI appreciated the project and awarded it third
              place in the hackathon.
            </p>
            <img className="badge-img" alt="GDI Badge" src="/gdibadge.png" />
          </div>
        </div>
      </main>
    </>
  );
}
