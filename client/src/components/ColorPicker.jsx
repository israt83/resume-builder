import { Check, Palette } from "lucide-react";
import React, { useState } from "react";

const ColorPicker = ({ selectedColor, onChange }) => {
  const colors = [
    { name: "Blue", value: "#3b82f6" },
    { name: "Red", value: "#ef4444" },
    { name: "Green", value: "#22c55e" },
    { name: "Yellow", value: "#f59e0b" },
    { name: "Orange", value: "#f97316" },
    { name: "Purple", value: "#8b5cf6" },
    { name: "Pink", value: "#ec4899" },
    { name: "Teal", value: "#14b8a6" },
    { name: "Indigo", value: "#3b82f6" },
    { name: "Black", value: "#1F2937" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm text-purple-600 bg-gradient-to-br from-purple-50 to-purple-100 ring-purple-300 hover:ring transition-all px-3 py-2 rounded-lg"
      >
        <Palette size={16} /> <span className="max-sm:hidden">Accent</span>
      </button>
      {isOpen && (
        <div className="grid grid-cols-4 w-60 gap-2 absolute top-full left-0 right-0 p-3 mt-2 z-10 bg-white rounded-md border border-b-gray-200 shadow-sm ">
            {colors.map((color) => (
                <div key={color.value} className="relative cursor-pointer group flex flex-col" onClick={() =>{onChange(color.value); setIsOpen(false)}}>
                    <div className="w-12 h-12 rounded-full border-2 border-transparent group-hover:border-black/25 transition-colors" style={{backgroundColor : color.value}}>

                    </div>
                    {selectedColor === color.value && (
                        <div className="absolute top-0 left-0 right-0 bottom-4 flex items-center justify-center">
                            <Check className="size-5 text-white"/>
                        </div>
                    )}
                    <p>{color.name}</p>
                </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
