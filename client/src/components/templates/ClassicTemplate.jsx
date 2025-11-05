// import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

// const ClassicTemplate = ({ data, accentColor }) => {
//   const formatDate = (dateStr) => {
//     if (!dateStr) return "";
//     const [year, month] = dateStr.split("-");
//     return new Date(year, month - 1).toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//     });
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800 leading-relaxed">
//       {/* Header */}
//       <header
//         className="text-center mb-8 pb-6 border-b-2"
//         style={{ borderColor: accentColor }}
//       >
//         <h1 className="text-3xl font-bold mb-2" style={{ color: accentColor }}>
//           {data.personal_info?.full_name || "Your Name"}
//         </h1>

//         <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
//           {data.personal_info?.email && (
//             <div className="flex items-center gap-1">
//               <Mail className="size-4" />
//               <span>{data.personal_info.email}</span>
//             </div>
//           )}
//           {data.personal_info?.phone && (
//             <div className="flex items-center gap-1">
//               <Phone className="size-4" />
//               <span>{data.personal_info.phone}</span>
//             </div>
//           )}
//           {data.personal_info?.location && (
//             <div className="flex items-center gap-1">
//               <MapPin className="size-4" />
//               <span>{data.personal_info.location}</span>
//             </div>
//           )}
//           {/* {data.personal_info?.linkedin && (
//                         <div className="flex items-center gap-1">
//                             <Linkedin className="size-4" />
//                             <span className="break-all">{data.personal_info.linkedin}</span>
//                         </div>
//                     )}
//                     {data.personal_info?.website && (
//                         <div className="flex items-center gap-1">
//                             <Globe className="size-4" />
//                             <span className="break-all">{data.personal_info.website}</span>
//                         </div>
//                     )} */}
//           {/* LinkedIn */}
//           {data.personal_info?.linkedin && (
//             <div className="flex items-center gap-1">
//               {/* <Linkedin className="size-4" /> */}
//               <a
//                 href={
//                   data.personal_info.linkedin.startsWith("http")
//                     ? data.personal_info.linkedin
//                     : `https://${data.personal_info.linkedin}`
//                 }
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 hover:underline break-all"
//               >
//                 LinkedIn
//               </a>
//             </div>
//           )}

//           {/* Personal Website */}
//           {data.personal_info?.website && (
//             <div className="flex items-center gap-1">
//               {/* <Globe className="size-4" /> */}
//               <a
//                 href={
//                   data.personal_info.website.startsWith("http")
//                     ? data.personal_info.website
//                     : `https://${data.personal_info.website}`
//                 }
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 hover:underline break-all"
//               >
//                 Portfolio
//               </a>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Professional Summary */}
//       {data.professional_summary && (
//         <section className="mb-6">
//           <h2
//             className="text-xl font-semibold mb-3"
//             style={{ color: accentColor }}
//           >
//             PROFESSIONAL SUMMARY
//           </h2>
//           <p className="text-gray-700 leading-relaxed">
//             {data.professional_summary}
//           </p>
//         </section>
//       )}

//       {/* Experience */}
//       {data.experience && data.experience.length > 0 && (
//         <section className="mb-6">
//           <h2
//             className="text-xl font-semibold mb-4"
//             style={{ color: accentColor }}
//           >
//             PROFESSIONAL EXPERIENCE
//           </h2>

//           <div className="space-y-4">
//             {data.experience.map((exp, index) => (
//               <div
//                 key={index}
//                 className="border-l-3 pl-4"
//                 style={{ borderColor: accentColor }}
//               >
//                 <div className="flex justify-between items-start mb-2">
//                   <div>
//                     <h3 className="font-semibold text-gray-900">
//                       {exp.position}
//                     </h3>
//                     <p className="text-gray-700 font-medium">{exp.company}</p>
//                   </div>
//                   <div className="text-right text-sm text-gray-600">
//                     <p>
//                       {formatDate(exp.start_date)} -{" "}
//                       {exp.is_current ? "Present" : formatDate(exp.end_date)}
//                     </p>
//                   </div>
//                 </div>
//                 {exp.description && (
//                   <div className="text-gray-700 leading-relaxed whitespace-pre-line">
//                     {exp.description}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* Projects */}
//       {data.project && data.project.length > 0 && (
//         <section className="mb-6">
//           <h2
//             className="text-xl font-semibold mb-4"
//             style={{ color: accentColor }}
//           >
//             PROJECTS
//           </h2>

//           <ul className="space-y-3 ">
//             {data.project.map((proj, index) => (
//               <div
//                 key={index}
//                 className="flex justify-between items-start border-l-3 border-gray-300 pl-6"
//               >
//                 <div>
//                   <li className="font-semibold text-gray-800 ">{proj.name}</li>
//                   <p className="text-gray-600">{proj.description}</p>
//                 </div>
//               </div>
//             ))}
//           </ul>
//         </section>
//       )}

//       {/* Education */}
//       {data.education && data.education.length > 0 && (
//         <section className="mb-6">
//           <h2
//             className="text-xl font-semibold mb-4"
//             style={{ color: accentColor }}
//           >
//             EDUCATION
//           </h2>

//           <div className="space-y-3">
//             {data.education.map((edu, index) => (
//               <div key={index} className="flex justify-between items-start">
//                 <div>
//                   <h3 className="font-semibold text-gray-900">
//                     {edu.degree} {edu.field && `in ${edu.field}`}
//                   </h3>
//                   <p className="text-gray-700">{edu.institution}</p>
//                   {edu.gpa && (
//                     <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>
//                   )}
//                 </div>
//                 <div className="text-sm text-gray-600">
//                   <p>{formatDate(edu.graduation_date)}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* Skills */}
//       {data.skills && data.skills.length > 0 && (
//         <section className="mb-6">
//           <h2
//             className="text-xl font-semibold mb-4"
//             style={{ color: accentColor }}
//           >
//             CORE SKILLS
//           </h2>

//           <div className="flex gap-4 flex-wrap">
//             {data.skills.map((skill, index) => (
//               <div key={index} className="text-gray-700">
//                 • {skill}
//               </div>
//             ))}
//           </div>
//         </section>
//       )}
//     </div>
//   );
// };

// export default ClassicTemplate;

import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";
import './ClassicTemplate.css';


const ClassicTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      // month: "short",
    });
  };

  return (
    <div id="resume" className="max-w-4xl mx-auto p-6 bg-white text-gray-800 font-sans leading-relaxed shadow-lg border border-gray-200">
      {/* Header */}
      <header
        className="text-left pb-1 border-b"
        style={{ borderColor: accentColor }}
      >
        <h1 className="text-3xl font-bold mb-1" style={{ color: accentColor }}>
          {data.personal_info?.full_name || "Your Name"}
        </h1>
        <p className="text-xl font-medium mb-1">
          {data.personal_info?.profession || "Front-end Developer"}
        </p>
        <div className="text-[15px]  mb-1">
          <span>
            {data.personal_info?.location} | ✉ {data.personal_info?.email} | 🕻{" "}
            {data.personal_info?.phone}
          </span>
        </div>
        <div className="text-[15px] text-blue-600 flex justify-start gap-3 mt-1">
          {data.personal_info?.linkedin && (
            <a
              href={
                data.personal_info.linkedin.startsWith("http")
                  ? data.personal_info.linkedin
                  : `https://${data.personal_info.linkedin}`
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn{" "}
              <span className="text" style={{ color: accentColor }}>
                |
              </span>
            </a>
          )}
          {data.personal_info?.github && (
            <a
              href={
                data.personal_info.github.startsWith("http")
                  ? data.personal_info.github
                  : `https://${data.personal_info.github}`
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub{" "}
              <span className="text" style={{ color: accentColor }}>
                |
              </span>
            </a>
          )}
          {data.personal_info?.website && (
            <a
              href={
                data.personal_info.website.startsWith("http")
                  ? data.personal_info.website
                  : `https://${data.personal_info.website}`
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>
          )}
        </div>
      </header>

      {/* Professional Summary */}
      {data.professional_summary && (
        <section className="border-b pb-1 ">
          <h2 className="text-[18px] font-bold " style={{ color: accentColor }}>
            OBJECTIVE
          </h2>
          <p className=" leading-relaxed whitespace-pre-line text-base">
            {data.professional_summary}
          </p>
        </section>
      )}

      {/* Skills Section */}
      {(data.skills?.technical?.length > 0 ||
        data.skills?.soft?.length > 0 ||
        data.skills?.frontend?.length > 0 ||
        data.skills?.backend?.length > 0 ||
        data.skills?.tools?.length > 0) && (
        <section className="border-b pb-1">
          <h2 className="text-[18px] font-bold " style={{ color: accentColor }}>
            SKILLS
          </h2>

          {/* Technical Skills */}
          {data.skills.technical?.length > 0 && (
            <div className="flex">
              <p className="font-semibold">.Technical Skills:</p>
              <p className="text-base px-1">
                {data.skills.technical.join(", ")}
              </p>
            </div>
          )}

          {/* Front-end */}
          {data.skills.frontend?.length > 0 && (
            <div className=" flex ">
              <p className="font-semibold">.Front-End:</p>
              <p className="text-base px-1">
                {data.skills.frontend.join(", ")}
              </p>
            </div>
          )}

          {/* Back-end */}
          {data.skills.backend?.length > 0 && (
            <div className="flex">
              <p className="font-semibold">.Back-End & Database:</p>
              <p className="text-base px-1">{data.skills.backend.join(", ")}</p>
            </div>
          )}

          {/* Tools */}
          {data.skills.tools?.length > 0 && (
            <div className="flex">
              <p className="font-semibold">.Tools:</p>
              <p className="text-base px-1">{data.skills.tools.join(", ")}</p>
            </div>
          )}

          {/* Soft Skills */}
          {data.skills.soft?.length > 0 && (
            <div className="flex">
              <p className="font-semibold">Soft Skills:</p>
              <p className="text-base px-1">{data.skills.soft.join(", ")}</p>
            </div>
          )}
        </section>
      )}

      {/* PROJECTS */}
      {data.project && data.project.length > 0 && (
        <section className="border-b pb-1">
          <h2 className="text-[18px] font-bold " style={{ color: accentColor }}>
            PROJECTS
          </h2>
          {data.project.map((proj, index) => {
            // Filter empty bullet items
            const bulletPoints =
              proj.features?.filter((item) => item && item.trim() !== "") || [];

            return (
              <div key={index} className="mb-">
                {/* Project Title */}
                <h3 className="text-[16px] font-bold">{proj.name}</h3>

                {/* Type */}
                {proj.type && <p>{proj.type}</p>}

                {/* Key Features heading */}
                {(proj.description || bulletPoints.length > 0) && (
                  <p className="font-semibold text-left">Key Features:</p>
                )}

                {/* Description paragraph */}
                {proj.description && <p className="">{proj.description}</p>}

                {/* Bullet Features */}
                {bulletPoints.length > 0 && (
                  <ul className="list-disc ml-5">
                    {bulletPoints.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                )}

                {/* Tech Stack */}
                {proj.tech && (
                  <p className=" font-medium mb-">
                    <span className="font-semibold">Tech Stack: </span>
                    {proj.tech}
                  </p>
                )}

                {/* Links */}
                {proj.links && (
                  <div className="text-blue-600 text-sm flex gap-2 font-medium">
                    {proj.links.client && (
                      <a href={proj.links.client} target="_blank">
                        Client Code{" "}
                        <span style={{ color: accentColor }}>|</span>
                      </a>
                    )}
                    {proj.links.server && (
                      <a href={proj.links.server} target="_blank">
                        Server Code{" "}
                        <span style={{ color: accentColor }}>|</span>
                      </a>
                    )}
                    {proj.links.live && (
                      <a href={proj.links.live} target="_blank">
                        Live Link
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </section>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <section className="border-b pb-1">
          <h2 className="text-[18px] font-bold " style={{ color: accentColor }}>
            EDUCATION
          </h2>
         <div className="flex justify-between">
           {data.education.map((edu, index) => (
            <div key={index}>
              <div>
                <p className="font-semibold">
                  {edu.degree} {edu.field && `in ${edu.field}`}
                </p>
                <p className="">{edu.institution}</p>
              </div>
              <div className="flex  items-center">
                <div className="text-sm">{formatDate(edu.start_date)}</div>
                <span className="px-1">-</span>
                <div className="text-sm">{formatDate(edu.graduation_date)}</div>
              </div>
            </div>
          ))}
         </div>
        </section>
      )}

      {/* LANGUAGE */}
      {data.language && data.language.length > 0 && (
        <section className="">
          <h2 className="text-[18px] font-bold" style={{ color: accentColor }}>
            LANGUAGE
          </h2>

          <div className="flex justify-between">
            {data.language.map((lang, index) => (
              <p key={index}>
                {lang.name}: {lang.level}
              </p>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ClassicTemplate;
