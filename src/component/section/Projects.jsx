import { RevealOnScroll } from "../RevealOnScroll";


export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Waste Facility Locator</h3>
              <img src="/Image1.png" alt="" srcset="" />
              <p className="text-gray-400 mb-4">
              Launched a community awareness campaign about responsible waste disposal, engaging over 200 local residents 
and organizations; the initiative increased participation in recycling programs by 25%, promoting environmental 
stewardship.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js","AI Bot","UI/UX","Location Integration"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://wastefacility.netlify.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project → 
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Passsword-Generator</h3>
              <img src="/Image2.png" alt="" srcset="" />
              <p className="text-gray-400 mb-4">
              Create strong password|Suggests password according to your choices and preferences.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JS"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/yadavpriya224/Password-Generator"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">UI-Interface</h3>
              <img src="/Image3.png" alt="" srcset="" />
              <p className="text-gray-400 mb-4">
              Designed an intuitive and responsive user interface for LeakTrackr, an app focused on detecting and tracking water/gas leaks in real-time. The UI emphasizes clarity, quick alert access, and smooth navigation to ensure users can monitor and manage leak incidents efficiently. 
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Figma", "Creativity", "UI/UX"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://www.figma.com/design/J6scqQV0BEpB7ab092dVHL/Untitled?node-id=0-1&p=f&t=7WacGqH0M9PbkKfx-0"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

             <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Heart Failure Readmission Predictor</h3>
              <img src="/Image4.png" alt="" srcset="" />
              <p className="text-gray-400 mb-4">
              Heart failure is a very common ailment leading to fatalities if not
attended to promptly. Even for the patients who get proper treatment, hospital readmissions result in a significant risk of death and a financial burden for patients, their
families as well as the already overburdened healthcare systems. Prediction of at-risk
patients for readmission allows for targeted interventions that reduce morbidity and
mortality.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML","CSS","React","Typescript","Node.js"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://poetic-longma-afcf4f.netlify.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

          
        
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};