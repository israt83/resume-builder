import { Plus, Trash2 } from "lucide-react";

const LanguageForm = ({ data, onChange }) => {
  const addLanguage = () => {
    const newLanguage = {
      name: "",
      level: "",
    };
    onChange([...data, newLanguage]);
  };

  const removeLanguage = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const updateLanguage = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Language</h3>
          <p className="text-sm text-gray-500">
            Add your languages & proficiency
          </p>
        </div>

        <button
          onClick={addLanguage}
          className="flex items-center gap-2 px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition"
        >
          <Plus className="size-4" />
          Add Language
        </button>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-6 text-gray-500 text-sm">
          No languages added
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((language, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg space-y-3"
            >
              <div className="flex justify-between">
                <h4>Language #{index + 1}</h4>
                <button
                  onClick={() => removeLanguage(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <input
                  value={language.name || ""}
                  onChange={(e) =>
                    updateLanguage(index, "name", e.target.value)
                  }
                  type="text"
                  placeholder="Language (e.g., Bangla, English)"
                  className="px-3 py-2 text-sm"
                />

                <input
                  value={language.level || ""}
                  onChange={(e) =>
                    updateLanguage(index, "level", e.target.value)
                  }
                  type="text"
                  placeholder="Proficiency (e.g., Native, Fluent)"
                  className="px-3 py-2 text-sm"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageForm;
