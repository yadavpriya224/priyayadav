import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const tools=["VSCode","Eclipse","Figma","Git/Github",];
  const programs=["Java","Python","C","Data Structures","ALgorithms","Automata","Computer Organisation and Architecture","Object Oriented System Design","Operating System(Windows,Linux)"];
  const frontendSkills = [
    "HTML",
    "CSS",
    "React",
    "JavaScript",
    "TailwindCSS",
  ];

  const backendSkills = ["Java", "AWS", "MySQL","Hibernate","Spring"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Programing languages and Computer Fundamentals </h3>
                <div className="flex flex-wrap gap-2">
                  {programs.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>BTECH | COMPUTER SCIENCE ENGINEERING(AIML) </strong>-ABES ENGINEERING COLLEGE GHAZIABAD
                  (2022-2026)
                </li>
                <li>
                  CGPA:8.35
                </li>
                <li>
                  <strong>12th | PCM</strong>-DR KSSS EDUCATIONAL ACADEMY(CBSE)
                  (2020-2021)
                </li>
                <li>
                  Percentage:80.8%
                </li>
                <li>
                  <strong>10th </strong>-ST THOMAS SR SEC SCHOOL(ICSE)
                  (2018-2019)
                </li>
                <li>
                  Percentage:81%
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Engineering Job Simulation-Goldman Sachs-Trainee(July2024-August2024){" "}
                  </h4>
                  <p>
                    Online work experience with the task of crack leaked password database.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Web Developer-Oasis Infobyte-Internship(Oct2023-Nov2023){" "}
                  </h4>
                  <p>
                    Mini Projects-Temperature Converter|Portfolio|LandingPage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};