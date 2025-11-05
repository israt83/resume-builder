import { Loader2, Sparkle } from 'lucide-react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import api from '../configs/api'
import toast from 'react-hot-toast'

const ProfesionalSummaryForm = ({data, onChange,setResumeData }) => {


  const {token} =useSelector((state) => state.auth)
  const [isGenerating, setIsGenerating] = useState(false);
  const genarateSummary = async () => {
    try {
      setIsGenerating(true)
      const prompt = `enhance my profesional summary ${data}`;
      const response = await api.post('/api/ai/enhance-pro-summary', {userContent:prompt},{headers:{Authorization:token}})
      setResumeData(prev=>({...prev , professional_summary:response.data.enhancedContent}))
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }finally{
      setIsGenerating(false)
    }
  }

  return (
    <div className='space-y-4'>
        <div className='flex items-center justify-between'>
            <div>
                <h3 className='flex items-center gap-2 text-lg font-semibold text-gray-900'>Profesional Summary</h3>
                <p className='text-sm text-gray-500'>Add your profesional summary</p>
            </div>
            <button disabled={isGenerating} onClick={genarateSummary} className='flex items-center gap-2 px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disabled:opacity-50'>
              {
                isGenerating ? (<Loader2 className='animate-spin size-4'/>) : (   <Sparkle className='size-4'/>
                )
              }
              {
                isGenerating ? ("Enhancing...") : ("AI Enhance")
              }
    
            </button>
        </div>

        <div className='mt-6'>
            <textarea
            className='w-full p-3 px-4 mt-2 border text-sm border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none'

              
                rows={7}
                placeholder='Add your profesional summary'
                value={data || ""}
                onChange={(e) => onChange(e.target.value)} />
                <p className='text-xs text-gray-500 max-w-4/5 mx-auto text-center'>Tip : keep it concise (3-4 sentences) and focus on your more relevent achivments and skills .</p>
        </div>
    </div>
  )
}

export default ProfesionalSummaryForm