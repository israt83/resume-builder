

import { Plus, Sparkles, X } from "lucide-react";
import { useState } from "react";

const SkillsForm = ({ data, onChange }) => {
  const [newSkill, setNewSkill] = useState("");
  const [type, setType] = useState(""); 

  const addSkill = () => {
    if (!newSkill.trim()) return;

    const updatedSkills = { ...data };
    if (!updatedSkills[type]) updatedSkills[type] = [];
    if (!updatedSkills[type].includes(newSkill.trim())) {
      updatedSkills[type].push(newSkill.trim());
      onChange(updatedSkills);
    }
    setNewSkill("");
  };

  const removeSkill = (skill, skillType) => {
    const updatedSkills = {
      ...data,
      [skillType]: data[skillType].filter((s) => s !== skill),
    };
    onChange(updatedSkills);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") addSkill();
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">Skills</h3>
        <p className="text-sm text-gray-500">
          Add your technical and soft skills
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-2">
        <input
          type="text"
          placeholder="Enter a skill (e.g., React.js, Problem Solving)"
          className="flex-1 px-3 py-2 text-sm border rounded"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="px-2 py-2 border rounded"
        >
          <option value="technical">Technical</option>
          <option value="soft">Soft</option>
          <option value="frontend">Front-end</option>
          <option value="backend">Back-end & Database</option>
          <option value="tools">Tools</option>
        </select>
        <button
          onClick={addSkill}
          className="flex items-center justify-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="size-4" />
        </button>
      </div>

      {/* Display skills */}
     {["technical", "soft", "frontend", "backend", "tools"].map((skillType) =>

        data[skillType]?.length > 0 ? (
          <div key={skillType} className="flex flex-wrap gap-2 mt-2">
            {data[skillType].map((skill, idx) => (
              <span
                key={idx}
                className="flex items-center gap-1 px-3 py-1 bg-blue-100 rounded-full text-sm font-medium"
              >
                {skill}
                <button
                  onClick={() => removeSkill(skill, skillType)}
                  className="ml-1 hover:bg-blue-200 rounded-full p-0.5 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        ) : null
      )}
    </div>
  );
};

export default SkillsForm;
