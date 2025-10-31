import {
  FilePenLineIcon,
  LoaderCircleIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
  UploadCloud,
  UploadCloudIcon,
  XIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import api from "../configs/api";
import  pdfToText  from "react-pdftotext";

const Dashboard = () => {

  const {user , token} = useSelector((state) => state.auth);

  const colors = ["#9333ea", "#d97706", "#dc2626", "#0284c7"];
  const [allResumes, setAllResumes] = useState([]);
  const [showCreatResume, setShowCreatResume] = useState(false)
  const [showUploadResume, setShowUploadResume] = useState(false)
  const [title , setTitle] = useState("")
  const [resume,setResume] = useState(null)
  const [editResumeId , setEditResumeId] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()


  const loadAllResumes = async () => {
    try {
      const {data} = await api.get(`/api/users/resumes`, {headers:{Authorization:token}} )
      setAllResumes(data.resumes)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  };

  const createResume = async (event) =>{
    try {
      event.preventDefault()
      const {data} = await api.post(`/api/resumes/create`, {title},{headers:{Authorization:token}} )
      setAllResumes([...allResumes,data.resume])
      setTitle("")
      setShowCreatResume(false)
      navigate(`/app/builder/${data.resume._id}`)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  const uploadResume = async (event) =>{
    event.preventDefault()
    setIsLoading(true)
    try {
      const resumeText = await pdfToText(resume)
      const {data} = await api.post(`/api/ai/upload-resume`, {title, resumeText},{headers:{Authorization:token}} )
      setTitle('')
      setResume(null)
      setShowUploadResume(false)
      navigate(`/app/builder/${data.resumeId}`)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
      setIsLoading(false)
    }

  const editTitle = async (event) =>{
    try {
       event.preventDefault()
      const {data} = await api.put(`/api/resumes/update`,{resumeId:editResumeId, resumeData:{title}}, {headers:{Authorization:token}} )
      setAllResumes(allResumes.map(resume => resume._id === editResumeId ? {...resume, title} : resume))
      setTitle('')
      setEditResumeId('')
      toast.success(data.message)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
   
  }

  const deleteResume = async (resumeId) =>{
    try {
       const confirm = window.confirm('Are you sure you want to delete this resume?')
    if(confirm){
     const {data} = await api.delete(`/api/resumes/delete/${resumeId}`, {headers:{Authorization:token}} )
      setAllResumes(allResumes.filter(resume => resume._id !== resumeId))
      toast.success(data.message)
    }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
   
  }


  useEffect(() => {
    loadAllResumes();
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden">
          Welcome, Israt
        </p>

        {/* Create / Upload Buttons */}
        <div className="flex gap-4">
          <button onClick={() => setShowCreatResume(true)} className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <PlusIcon className="size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500 text-white rounded-full" />
            <p className="text-sm hover:text-indigo-600 transition-all duration-300">
              Create Resume
            </p>
          </button>

          <button onClick={() => setShowUploadResume(true)} className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <UploadCloudIcon className="size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500 text-white rounded-full" />
            <p className="text-sm hover:text-indigo-600 transition-all duration-300">
              Upload Existing
            </p>
          </button>
        </div>

        <hr className="border border-slate-300 my-6 sm:w-[305px]" />

        {/* Resume Cards */}
        <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
          {allResumes.map((resume, index) => {
            const baseColor = colors[index % colors.length];
            return (
              <button
              onClick={() => navigate(`/app/builder/${resume._id}`)}
                key={index}
                className="group relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border hover:shadow-lg transition-all duration-300 cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, ${baseColor}15, ${baseColor}05)`,
                  borderColor: baseColor + "40",
                }}
              >
                <FilePenLineIcon
                  className="size-7 hover:scale-105 transition-all"
                  style={{ color: baseColor }}
                />
                <p
                  className="text-sm hover:scale-105 transition-all px-2 text-center"
                  style={{ color: baseColor }}
                >
                  {resume.title}
                </p>
                <p
                  className="absolute bottom-1 text-[11px] text-slate-400 transition-all duration-300 px-2 text-center"
                  style={{ color: baseColor + "90" }}
                >
                  Updated on {new Date(resume.updatedAt).toLocaleDateString()}
                </p>

                <div onClick={e => e.stopPropagation()} className="absolute top-1 right-1 hidden group-hover:flex items-center gap-1 transition-all duration-300">
                  <TrashIcon onClick={() =>deleteResume(resume._id)} className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors" />
                  <PencilIcon onClick={() =>{setEditResumeId(resume._id); setTitle(resume.title)}}  className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors" />
                </div>
              </button>
            );
          })}
        </div>

          {
            showCreatResume && (
              <form onSubmit={createResume} onClick={() => setShowCreatResume(false)} className="fixed inset-0 bg-black/70 backdrop-blur-2xl bg-opacity-50 z-10 flex items-center justify-center ">
                <div onClick={e => e.stopPropagation()} className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6">
                  <h2 className="text-xl font-bold mb-4">Create Resume</h2>
                  <input  onChange={(e)=>setTitle(e.target.value)} value={title}  type="text" placeholder="Enter resume title" className="w-full px-4 py-2 mb-4 focus:border-b-green-600 ring-green-600" required />
                  <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">Create Resume</button>
                  <XIcon className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors" onClick={() => {setShowCreatResume(false); setTitle("")}}/>
                </div>
              </form>
            )
          }

          {
            showUploadResume && (
              <form onSubmit={uploadResume} onClick={() => setShowUploadResume(false)} className="fixed inset-0 bg-black/70 backdrop-blur-2xl bg-opacity-50 z-10 flex items-center justify-center ">
                <div onClick={e => e.stopPropagation()} className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6">
                  <h2 className="text-xl font-bold mb-4">Upload Resume</h2>
                  <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder="Enter resume title" className="w-full px-4 py-2 mb-4 focus:border-b-green-600 ring-green-600" required />
                  <div>
                    <label htmlFor="resume-input" className="block text-sm text-slate-700">
                      Select resume file
                         <div className="flex flex-col items-center justify-center gap-2 border group text-slate-400 border-slate-400 border-dashed rounded-md p-4 py-10 my-4 hover:border-green-500 hover:text-green-700 transition-colors cursor-pointer">
                      {resume ? (
                        <p className="text-green-700">{resume.name}</p>  
                      ) : (
                        <>
                        <UploadCloud className="size-14 stroke-1"/>
                        <p>Uploade resume</p>
                        </>
                      
                      )}
                    </div>
                    </label>
                   <input type="file" id="resume-input" accept=".pdf" hidden onChange={(e) => setResume(e.target.files[0])}/>
                  </div>
                  <button disabled={isLoading} className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                    {isLoading && <LoaderCircleIcon className="animate-spin size-4 text-white"/>}
                    {isLoading ? 'Uploading...' : 'Upload Resume'}
                  </button>
                  <XIcon className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors" onClick={() => {setShowUploadResume(false); setTitle("")}}/>
                </div>
              </form>
            )
          }
            {
  editResumeId && (
    <form onSubmit={editTitle} className="fixed inset-0 bg-black/70 backdrop-blur-2xl bg-opacity-50 z-10 flex items-center justify-center ">
      <div onClick={(e) => e.stopPropagation()} className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6">
        <h2 className="text-xl font-bold mb-4"> Edit Resume Title</h2>

        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Enter resume title"
          className="w-full px-4 py-2 mb-4 focus:border-b-green-600 ring-green-600"
          required
        />

        <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
          Update
        </button>

        <XIcon
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
          onClick={() => {
            setEditResumeId('');
            setTitle('');
          }}
        />
      </div>
    </form>
  )
}


      </div>
    </div>
  );
};

export default Dashboard;
