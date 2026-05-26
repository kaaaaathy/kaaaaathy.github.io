
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes, Link, Navigate, useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { work } from "./work";
import { pubs as pubItems } from "./pubs";

function Writing() {

  return (
    <section className="inner">
      <h2><h3>Writing<span id="pubnote">(selected publications)</span></h3>
        {pubItems.map((item, index) => (
          <ul key={index}>
            <p className="pub">{item.title}, <a href={item.url} target="_blank">{item.publication}</a>, {item.year}</p>
          </ul>
        ))}
      </h2>
    </section >
  );
}







function Navbar() {
  const location = useLocation()

  return (
    <nav>
      <Link id="logo" to={"/"}>
        kathy wu
      </Link>
      <Link id="logo-m" to={"/"}>
        {/* @ts-ignore */}
        <marquee scrollamount="4" behavior="alternate">kathy wu</marquee>
      </Link>


      <div id="sidebar">
        <p className="sidebar-bio">
          x-disciplinary artist<br />
          designer poet educator
          <br />
        </p>
      </div>

      <div id="aboutcontainer">
        <Link className="aboutlinks" to={"/#"}><span className="flourish">𖦹</span>work </Link>
        <Link className="aboutlinks" to={"/info"}><span className="flourish">⟡</span>info </Link>
        <Link className="aboutlinks" to={"/teaching"}><span className="flourish">𖡼</span>teaching </Link>
        <Link className="aboutlinks" to={"/writing"}><span className="flourish">⩩</span>writing </Link>

      </div>
    </nav>
  )
}

function ProjectList() {
  window.scrollTo(0, 0);

  const halfway = Math.floor(work.length / 2 - 1);
  const half1 = work.slice(0, halfway);
  const half2 = work.slice(halfway);

  return (
    <section id="work-stuff">
      <div id="col1">
        {half1.map((project) =>
          <Link to={`/${project.folder}`} key={project.folder}>
            <div className="bbox"><img src={`work/${project.folder}/${project.thumb}`} />
              <figcaption><div className="arrow"></div><p>{project.name}</p></figcaption></div>
          </Link>
        )}
      </div>
      <div id="col2">
        {half2.map((project) =>
          <Link to={`/${project.folder}`} key={project.folder}>
            <div className="bbox"><img src={`work/${project.folder}/${project.thumb}`} />

              <figcaption><div className="arrow"></div><p>{project.name}</p></figcaption></div>
          </Link>
        )}
      </div>


    </section>
  )
}

function About() {
  window.scrollTo(0, 0);

  return (
    <section className="inner">
      <h2>
        <img className="aboutpic" src="bitmap.png" />
        <br /><br />
        kathy wu ✩彡 is an artist, poet,
        designer, and educator working across language, computation, books, fiber. They currently teach at < a href="https://risd.gd/" target="_blank" > RISD Graphic Design</a >. 						Her debut book, <a href="https://www.wendyssubway.com/publishing/titles/she-will-last-as-long-as-stones" target="_blank">She Will Last as Long as Stones</a> is out with Wendy's Subway.< br /> <br />

        kathy has taught < a
          href="https://poetry.arizona.edu/calendar/geopoetics-kathy-wu" target="_blank" >place-based writing workshops</a > and
        worked on < a href="https://www.media.mit.edu/projects/scratch/overview/" target="_blank" > creative
          tools</a > at MIT. She has been published or anthologized by < a href="https://parsonsdt.github.io/critical-coding-cookbook/" target="_blank" > The New School</a >, Fonograf Editions, Nightboat Books, <a href="https://www.natbrut.org/issue-eighteen" target="_blank">NatBrut</a>, <a href="https://www.tiltedhouse.org/shop/for-let-earth-kathy-wu-presale" target="_blank">Tilted House</a>, and selected for residencies at the Provincetown Fine Arts Work Center, Blue Mountain Center, <a href="https://www.blackmountaincollege.org/" target="_blank">Black Mountain College Museum + Art Center</a>. Their visual art work has been shown at <a href="https://www.culturehub.org/events/into-uncertain-weathers" target="_blank">CultureHub & La MaMa</a>, Emerson Contemporary, Ulises Project Space, AS220, Pao Arts Center. They have given talks at <a href="https://amc.alliedmedia.org/" target="_blank">Allied Media Conference</a>, American Association for Geographers, WordHack @ <a href="https://www.babycastles.com/" target="_blank">Babycastles</a>, and other places. She is learning to move more slowly.
        < br /> <br />They are enthusiastic about collective publishing, < a href="https://interferencearchive.org/" target="_blank" >political education</a >, and <a href="https://www.aarw.org/" target="_blank">organizing</a> against displacement. Always nice to hear from new people, say hello~
        <br /> < br />
        <div className="extlink">
          <a href="https://docs.google.com/document/d/1xcpC8EH8U03K49ZLjWUCj9zQV7xGKdwxYPdEnZNK2eU/edit" target="_blank">cv <div className="arrow-flip"></div></a>
          &emsp;&emsp;
          <a href="mailto:kaaathywu@gmail.com" target="_blank">email <div className="arrow-flip"></div></a>
          &emsp;&emsp;
          <a href="https://pixelflower.substack.com/subscribe?next=https%3A%2F%2Fsubstack.com%2F%40pixelflower%3Futm_campaign%3Dprofile%26utm_medium%3Dprofile-page&utm_source=profile-page&utm_medium=web&utm_campaign=substack_profile&just_signed_up=true" target="_blank">newsletter <div className="arrow-flip"></div></a>
        </div>
        <br /> < br />
        <br /><br />


        <img className="aboutpic" src="bitmap-drawing.png" />
        <p id="credit"><li>HYPERTEXT</li>
          Drawing circa 1999. The work here is deeply inspired by and rooted in the ideas + teachings of Kameelah Janan Rasheed, Allison Parrish, Amy Suo Wu, Marisa Morán Jahn, Pauline Oliveros, Eunsong Kim, Blair Simmons, Sawako Nakayasu, Maralie Armstrong-Rial, Eleni Sikelianos, Renee Gladman, many others...
          <br /><br />...as well as the practices of collaborators + friends: Ryan Greene, <a href='https://montoyamoraga.io/' target='_blank'>aarón montoya-moraga</a>, Tiffany Mi, <a href='https://www.liviafoldes.com/' target='_blank'>Livia Foldes</a>, Giancarlo + Nora of <a href='https://cardboardhousepress.org/Cartonera' target='_blank'>Cardboard House Press</a>, <a href='https://lily-xie.com/' target='_blank'>Lily Xie</a>, <a href='https://www.haiwenlin.com/' target='_blank'>Hai-Wen Lin</a>, <a href='https://www.zhanyichen.org/' target='_blank'>Zhanyi Chen</a>, <a href='https://flowers4xyz.com/' target='_blank'>Hua Xi</a>, <a href='https://www.poetryproject.org/people/basalt-hsu' target='_blank'>Basalt Tsu</a>, <a href='https://hellodri.itch.io/' target='_blank'>Dri Chiu Tattersfield</a>,  <a href='https://www.katygero.com/' target='_blank'>Katy Gero</a>,  <a href='http://jackieis.online/' target='_blank'>Jackie Liu</a>. Much inspiration comes from former students, as I have learned so much from teaching.
          <li>about the site</li>
          This site was designed and styled by me, set in Authentic Sans, HB Lossy, FT88. This site was mostly developed by my sister, Lily Wu, using React.js. I would love someday to have my website be handcoded HTML with no dependencies or analytics (I use Cloudflare for secure encryption). So far the structure is one which is "grandfathered in" from my site in 2015. That's how long I've had this domain name. I started <a href="https://pixelflower.xyz" target="_blank">this one</a> as an alternative but maybe check back later...</p>
      </h2 >
    </section >
  )
}

function Teaching() {
  window.scrollTo(0, 0);

  return (
    <section className="inner">
      <h2><h3>teaching</h3>
        <a className="syllabus" href="https://kaaathy.com/comppoetics/" target="_blank">↳ Computational Poetics </a>
        < br /> Experimental studio about new ways of reading and writing, with and without computers. RISD Graphic Design 2021, 2025.
        < br /> <br />
        <a className="syllabus" href="https://kaaathy.com/type-3/" target="_blank">↳ Typography III </a>
        < br /> Core studio course for third-year undergraduates. RISD Graphic Design 2024.
        < br /> <br />
        <a className="syllabus" href="https://kaaathy.com/geopoetics/" target="_blank">↳ Geopoetics</a>
        < br />Language arts class about reading and writing land and earth. Brown Literary Arts 2023.
        < br /> <br />
        <a className="syllabus" href="https://docs.google.com/document/d/1MxJDl_5UUTFgBX5w4zzRZsTrkbUMZoPO8d4RY698ZRM/edit" target="_blank">↳ Cross-Disciplinary Language Arts</a>
        < br />Intro level class focused on Fluxist and Dada notions of the "found," and critiques of the found. Brown University Literary Arts 2024.
        < br /> <br />
        <a className="syllabus" href="https://kaaathy.com/design-for-coop" target="_blank">↳ Design for Cooperation</a>
        < br /> Studio course about design and media culture in social movements. Cotaught with Katya Rozanova and Hadass Wade.
        CUNY Queens College 2022.
        < br /> <br />
        <a className="syllabus" href="https://docs.google.com/document/d/1AjvRxkHoxf9jq-NfhtO6ui30zIim4PYBUYNh3piwhxQ/edit?tab=t.0" target="_blank">↳ Graduate Studio II </a>
        < br /> Research-based, experiment- and process-oriented studio for RISD MFA students in Graphic Design. Cotaught with Lucy Hitchcock, 2025, and Kelsey Elder, 2026.
        < br /> <br />
        <a className="syllabus" href="https://docs.google.com/document/d/1RYoNU857nJT1IcGUCWsOTFE01WyrfGhEE37-xcjUjm4/edit?tab=t.0" target="_blank">↳ Design Studio 4 </a>
        < br /> Studio for BFA students to prepare them for professional graphic design practice after design school.
        < br /> <br />
      </h2>
    </section>
  )
}




function parseProjectContent(contentText: string, folder: string) {
  const imageRegex = /\[([^\[\]]+)\]/g, underlineRegex = /\*([^\*]+)\*/g, centerRegex = /\{([^\{\}]+)\}/g;
  //		var callback=function(){
  const content = contentText.replace(/\[/g, "\n[").replace(/\]/, "]\n").replace(/\n+/g, "\n").replace(/^\s+|\s+$/g, "").split("\n");
  let contentString = "";
  for (var i = 0; i < content.length; i++) {
    if (content[i].search(imageRegex) >= 0) {
      contentString += content[i].replace(imageRegex, function (a, b) { return "<img src=\"work/" + folder + "/" + b + "\">" });
    }
    else {
      contentString += "<div" + (content[i].search(centerRegex) >= 0 ? " className=\"center-align\"" : "") + ">" + content[i].replace(centerRegex, function (a, b) { return b; }).replace(underlineRegex, function (a, b) { return "<span className=\"highlight\">" + b + "</span>" }) + "</div>"
    }
  }
  return contentString
}

function ProjectDetail() {
  const params = useParams()
  const project = work.find((project) => project.folder === params.projectId)
  if (!project) {
    return <NotFound />
  }
  window.scrollTo(0, 0);
  return <section id="content">
    <h3>{project.name}</h3>

    <div dangerouslySetInnerHTML={{ __html: parseProjectContent(project.content, project.folder) }}></div>
    <br />
    <span className="metadata">{project.tags} ~ {project.year}</span>
  </section >

}

function NotFound() {
  // Redirect home if we can't find the project
  return <Navigate to={"/"} />

}
function App() {
  // reset body styles & scroll on every route change to avoid leftover inline styles
  function RouteEffect() {
    const loc = useLocation();
    useEffect(() => {
      // Ensure we're at the top of the page
      window.scrollTo(0, 0);
      // Clear common inline styles other pages/scripts may set
      document.body.style.height = "";
      document.body.style.minHeight = "";
      document.body.style.overflow = "";
      document.body.style.overflowY = "";

    }, [loc]);
    return null;
  }

  return (
    <HashRouter>
      <Navbar />
      <RouteEffect />
      <main>
        <Routes>
          {/* @ts-ignore */}
          <Route path="/" exact element={<ProjectList />}></Route>
          <Route path="/info" element={<About />}></Route>
          <Route path="/teaching" element={<Teaching />}></Route>
          <Route path="/writing" element={<Writing />}></Route>

          <Route path="/:projectId" element={<ProjectDetail />} />;
        </Routes>
      </main>
    </HashRouter>
  );
}


const forceSlashAfterHash = () => {

  let _hash = window.location.hash;

  if (_hash[1] && _hash[1] != '/') {

    window.location.href = window.location.origin + window.location.pathname + window.location.search + "#/" + _hash.slice(1);

  }

}

forceSlashAfterHash();

window.addEventListener('hashchange', forceSlashAfterHash);

const rootElement = document.getElementById("app")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
